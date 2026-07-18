import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { toast } from "sonner"

import { ContactForm } from "./ContactForm"

jest.mock("sonner", () => ({
  toast: { success: jest.fn(), error: jest.fn() },
}))

function renderForm() {
  const queryClient = new QueryClient({ defaultOptions: { mutations: { retry: false } } })
  return render(
    <QueryClientProvider client={queryClient}>
      <ContactForm />
    </QueryClientProvider>,
  )
}

async function fillAndSubmit() {
  await userEvent.type(screen.getByLabelText("Name"), "Jane Doe")
  await userEvent.type(screen.getByLabelText("Email"), "jane@company.com")
  await userEvent.type(screen.getByLabelText("Message"), "Let's work together!")
  await userEvent.click(screen.getByRole("button", { name: /send message/i }))
}

describe("ContactForm", () => {
  it("sends the message and resets the form on success", async () => {
    const fetchMock = jest.fn().mockResolvedValue({ ok: true })
    global.fetch = fetchMock as unknown as typeof fetch

    renderForm()
    await fillAndSubmit()

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1))
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit]
    expect(url).toContain("https://formsubmit.co/ajax/")
    expect(JSON.parse(init.body as string)).toMatchObject({
      name: "Jane Doe",
      email: "jane@company.com",
      message: "Let's work together!",
    })

    await waitFor(() => expect(toast.success).toHaveBeenCalled())
    expect(screen.getByLabelText("Name")).toHaveValue("")
    expect(screen.getByLabelText("Message")).toHaveValue("")
  })

  it("keeps the input and shows an error toast when sending fails", async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false, status: 500 }) as unknown as typeof fetch

    renderForm()
    await fillAndSubmit()

    await waitFor(() => expect(toast.error).toHaveBeenCalled())
    expect(screen.getByLabelText("Name")).toHaveValue("Jane Doe")
    expect(screen.getByLabelText("Message")).toHaveValue("Let's work together!")
  })
})
