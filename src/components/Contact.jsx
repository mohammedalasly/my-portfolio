import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
	const [formData, setFormData] = useState({ name: "", email: "", message: "" })
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState(null)
	const [isFading, setIsFading] = useState(false)

	const handleInputChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value })

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus(null)
		setIsFading(false)

		try {
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				formData,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			)

			setSubmitStatus("success")
			setFormData({ name: "", email: "", message: "" })
		} catch (error) {
			console.error("EmailJS Error:", error)
			setSubmitStatus("error")
		} finally {
			setIsSubmitting(false)
		}
	}

	// Auto fade + remove status message
	useEffect(() => {
		if (!submitStatus) return

		const fadeTimer = setTimeout(() => setIsFading(true), 4000)
		const removeTimer = setTimeout(() => {
			setSubmitStatus(null)
			setIsFading(false)
		}, 5000)

		return () => {
			clearTimeout(fadeTimer)
			clearTimeout(removeTimer)
		}
	}, [submitStatus])

	const openGoogleCalendar = () => {
		const link = document.createElement("a")
		link.href = "https://calendar.app.google/fascCALtGCa6NLnQA"
		link.target = "_blank"
		link.rel = "noopener noreferrer"
		link.click()
	}

	return (
		<div className="space-y-8">
			<div className="reveal">
				<h2 className="section-title">Get In Touch</h2>
				<p className="section-subtitle mt-2">
					Ready to start your next project? Let's create something amazing
					together.
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
				{/* LEFT — Schedule a call */}
				<div className="lg:col-span-2 reveal-left">
					<div className="bg-(--bg-surface) border-4 border-(--color-border) rounded 
					neo-shadow-lg p-6 sm:p-8 h-full flex flex-col relative z-10">
						<img
							src="./schedule.svg"
							alt="schedule"
							className="w-14 h-14 shrink-0"
						/>

						<h3 className="text-2xl font-black tracking-tight text-(--color-typography) mt-5">
							Schedule a Call
						</h3>
						<p className="text-sm md:text-lg font-semibold opacity-50 text-(--color-typography) mt-1">
							Prefer to chat directly? Schedule a 30-minute call to discuss
							potential opportunities and collaborations.
						</p>
						<div className="flex items-center justify-center grow py-6">
							<img src="calender.svg" alt="calender" />
						</div>

						<button
							type="button"
							onClick={openGoogleCalendar}
							className="w-full flex items-center justify-center gap-2 bg-[#f4cf2f]
							text-[#383737] border-2 border-(--color-border) 
							 rounded py-4 font-black text-lg 
							neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer"
						>
							Book a Call
						</button>
					</div>
				</div>

				{/* Contact form */}
				<form
					onSubmit={handleSubmit}
					className="lg:col-span-3 bg-(--bg-surface) border-4 border-(--color-border) 
					rounded neo-shadow-lg p-6 sm:p-8 flex flex-col relative z-10 reveal-right"
				>
					<img src="./email.svg" alt="email" className="w-14 h-14 shrink-0" />

					<h3 className="text-2xl font-black tracking-tight text-(--color-typography) mt-5">
						Send me a message
					</h3>
					<p className="text-sm md:text-lg font-semibold opacity-50 text-(--color-typography) mt-1">
						Drop me a message, and I'll get back to you as soon as possible.
					</p>

					{submitStatus && (
						<div
							className={`mt-4 flex items-center gap-2 rounded px-4
							neo-shadow transition-all duration-500
							${isFading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}
							${submitStatus === "success" ? "bg-[#acebc0]" : "bg-[#f28b71]"}`}
						>
							<img
								src={
									submitStatus === "success" ? "./happy.svg" : "./nervous.svg"
								}
								alt={submitStatus === "success" ? "happy" : "nervous"}
								className="w-22 h-22 shrink-0"
							/>
							<p className="text-base text-(--status-msg) font-semibold">
								{submitStatus === "success"
									? "Thanks for reaching out! I'll get back to you soon."
									: "Something went wrong. Please try again."}
							</p>
						</div>
					)}

					<div className="flex flex-col gap-6 mt-6 grow">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div className="space-y-2">
								<label className="text-sm font-black uppercase tracking-widest block text-(--color-typography)">
									Full Name
								</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									placeholder="John Doe"
									required
									className="w-full bg-(--bg-surface) border-2 border-(--color-border) rounded p-4 
									focus:outline-none focus:ring-4 transition-all 
									placeholder:text-zinc-400 text-(--color-typography)"
								/>
							</div>

							<div className="space-y-2">
								<label className="text-sm font-black uppercase tracking-widest block text-(--color-typography)">
									Email Address
								</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									placeholder="john@example.com"
									required
									className="w-full bg-(--bg-surface) border-2 border-(--color-border) rounded p-4 
									focus:outline-none focus:ring-4  transition-all 
									placeholder:text-zinc-400 text-(--color-typography)"
								/>
							</div>
						</div>

						<div className="flex flex-col grow space-y-2">
							<label className="text-sm font-black uppercase tracking-widest block text-(--color-typography)">
								Your Message
							</label>
							<textarea
								name="message"
								value={formData.message}
								onChange={handleInputChange}
								placeholder="Hey! I'd love to talk about..."
								required
								className="grow w-full bg-(--bg-surface) border-2 border-(--color-border) rounded p-4 
								focus:outline-none focus:ring-4 transition-all 
								placeholder:text-zinc-400 text-(--color-typography) resize-none min-h-30"
							/>
						</div>
					</div>

					<button
						type="submit"
						disabled={isSubmitting}
						className="mt-6 w-full flex items-center justify-center gap-2 bg-(--color-typography) 
						text-(--bg-surface) border-2 border-(--color-border) rounded py-4 font-black 
						tracking-widest text-lg neo-shadow hover:translate-x-1 hover:translate-y-1 
						hover:shadow-none transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed 
						disabled:translate-x-0 disabled:translate-y-0 disabled:shadow-(--neo-shadow-lg)"
					>
						<span>{isSubmitting ? "Sending..." : "Let's Talk"}</span>
					</button>
				</form>
			</div>
		</div>
	)
}

export default Contact
