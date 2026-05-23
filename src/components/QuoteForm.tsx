"use client";

import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { submitForm, type FormPayload } from "@/lib/submitForm";

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  projectType: string;
  suburb: string;
  message: string;
};

const inputStyle = {
  width: "100%",
  backgroundColor: "var(--bg-primary)",
  border: `0.5px solid var(--border)`,
  color: "var(--text-primary)",
  fontFamily: "var(--font-dm-sans)",
  fontSize: "14px",
  padding: "14px 16px",
  borderRadius: "4px",
  transition: "border-color 0.2s ease",
  outline: "none",
};

const labelStyle = {
  display: "block",
  fontFamily: "var(--font-dm-sans)",
  fontSize: "11px",
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "var(--text-muted)",
  marginBottom: "8px",
};

const errorStyle = {
  fontFamily: "var(--font-dm-sans)",
  fontSize: "12px",
  color: "#e07070",
  marginTop: "4px",
};

const checklist = [
  "Free on-site consultation",
  "Detailed itemised quote within 48 hours",
  "No obligation, no pressure",
  "Licensed and fully insured in NSW",
];

const projectTypes = [
  "New Build",
  "Complete Home Renovation",
  "Home Extension",
  "Kitchen or Bathroom Remodel",
  "Custom Carpentry & Joinery",
  "General Maintenance & Repairs",
  "Not sure yet",
];

type QuoteFormProps = {
  sectionId?: string;
  pitchTag?: string;
  pitchHeading?: ReactNode;
  showTopBorder?: boolean;
};

export default function QuoteForm({
  sectionId = "quote",
  pitchTag = "Free Quote",
  pitchHeading = (
    <>
      Let&apos;s build something
      <br />
      great together
    </>
  ),
  showTopBorder = true,
}: QuoteFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const payload: FormPayload = {
        ...data,
        submittedAt: new Date().toISOString(),
      };
      await submitForm(payload);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id={sectionId}
      className="py-24 md:py-32"
      style={{
        backgroundColor: "var(--bg-surface)",
        borderTop: showTopBorder ? `0.5px solid var(--border)` : undefined,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <p
              className="uppercase mb-6"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: "var(--gold)",
              }}
            >
              {pitchTag}
            </p>
            <h2
              className="mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                color: "var(--text-primary)",
              }}
            >
              {pitchHeading}
            </h2>
            <p
              className="mb-10"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "15px",
                fontWeight: 300,
                color: "var(--text-muted)",
                lineHeight: 1.8,
                maxWidth: "400px",
              }}
            >
              Tell us about your project and we&apos;ll get back to you within 24 hours
              to book a free, no-obligation site visit.
            </p>

            {/* Checklist */}
            <div className="flex flex-col gap-4">
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: "20px",
                      height: "20px",
                      border: `0.5px solid var(--gold)`,
                      color: "var(--gold)",
                    }}
                  >
                    <span style={{ fontSize: "12px" }}>✓</span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "14px",
                      color: "var(--text-muted)",
                      fontWeight: 300,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            {status === "success" ? (
              <div
                className="p-10 flex flex-col items-start"
                style={{ border: `0.5px solid var(--gold)` }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "var(--gold)",
                  }}
                >
                  Thank you.
                </h3>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "15px",
                    fontWeight: 300,
                    color: "var(--text-muted)",
                    lineHeight: 1.8,
                  }}
                >
                  We&apos;ve received your enquiry and will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1: names */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" style={labelStyle}>
                      First Name *
                    </label>
                    <input
                      {...register("firstName", { required: "Required" })}
                      id="firstName"
                      style={inputStyle}
                      placeholder="Your first name"
                      autoComplete="given-name"
                    />
                    {errors.firstName && (
                      <p style={errorStyle}>{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" style={labelStyle}>
                      Last Name
                    </label>
                    <input
                      {...register("lastName")}
                      id="lastName"
                      style={inputStyle}
                      placeholder="Your last name"
                      autoComplete="family-name"
                    />
                  </div>
                </div>

                {/* Row 2: contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" style={labelStyle}>
                      Phone Number *
                    </label>
                    <input
                      {...register("phone", { required: "Required" })}
                      id="phone"
                      style={inputStyle}
                      placeholder="04XX XXX XXX"
                      type="tel"
                      autoComplete="tel"
                    />
                    {errors.phone && (
                      <p style={errorStyle}>{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>
                      Email Address *
                    </label>
                    <input
                      {...register("email", {
                        required: "Required",
                        pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
                      })}
                      id="email"
                      style={inputStyle}
                      placeholder="you@email.com"
                      type="email"
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p style={errorStyle}>{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Row 3: project type — label wraps select for explicit association */}
                <div className="mb-4">
                  <label
                    htmlFor="projectType"
                    style={{ ...labelStyle, cursor: "pointer" }}
                  >
                    Project Type *
                    <select
                      {...register("projectType", { required: "Required" })}
                      id="projectType"
                      required
                      style={{
                        ...inputStyle,
                        cursor: "pointer",
                        display: "block",
                        marginTop: "8px",
                      }}
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map((pt) => (
                        <option key={pt} value={pt}>
                          {pt}
                        </option>
                      ))}
                    </select>
                  </label>
                  {errors.projectType && (
                    <p style={errorStyle}>{errors.projectType.message}</p>
                  )}
                </div>

                {/* Row 4: suburb */}
                <div className="mb-4">
                  <label htmlFor="suburb" style={labelStyle}>
                    Project Suburb
                  </label>
                  <input
                    {...register("suburb")}
                    id="suburb"
                    style={inputStyle}
                    placeholder="e.g. Roseville"
                    autoComplete="address-level2"
                  />
                </div>

                {/* Row 5: message */}
                <div className="mb-6">
                  <label htmlFor="message" style={labelStyle}>
                    Tell us about your project
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical" }}
                    placeholder="Describe your project, timeline, or any questions..."
                  />
                </div>

                {/* Error state */}
                {status === "error" && (
                  <p
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "13px",
                      color: "#e07070",
                    }}
                  >
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                {/* Submit */}
                <div>
                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileTap={{ scale: 0.98 }}
                    className="w-full uppercase tracking-widest font-medium transition-colors duration-200 disabled:opacity-60 hover:bg-[var(--gold-light)]"
                    style={{
                      backgroundColor: "var(--gold)",
                      color: "var(--bg-primary)",
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "13px",
                      letterSpacing: "0.12em",
                      padding: "16px 32px",
                    }}
                    onMouseEnter={(e) => {
                      if (status !== "loading")
                        e.currentTarget.style.backgroundColor = "var(--gold-light)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--gold)";
                    }}
                  >
                    {status === "loading" ? "Sending..." : "Send Enquiry →"}
                  </motion.button>
                  <p
                    className="mt-3"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "12px",
                      color: "var(--text-muted)",
                    }}
                  >
                    We respond to all enquiries within 24 hours.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
