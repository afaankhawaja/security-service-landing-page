"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";

type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

export const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            // Replace with your actual EmailJS IDs
            // await emailjs.send(
            //   "YOUR_SERVICE_ID",
            //   "YOUR_TEMPLATE_ID",
            //   data,
            //   "YOUR_PUBLIC_KEY"
            // );

            console.log("Form submitted locally:", data);
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay

            setSubmitStatus("success");
            reset();
        } catch (error) {
            console.error("Submission failed:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest text-navy-light/60 uppercase">Full Name</label>
                    <input
                        {...register("name", { required: "Name is required" })}
                        className={cn(
                            "w-full bg-gray-50 border border-gray-100 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors",
                            errors.name && "border-red-500"
                        )}
                        placeholder="John Doe"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest text-navy-light/60 uppercase">Email Address</label>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                        })}
                        className={cn(
                            "w-full bg-gray-50 border border-gray-100 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors",
                            errors.email && "border-red-500"
                        )}
                        placeholder="john@example.com"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest text-navy-light/60 uppercase">Phone Number</label>
                <input
                    {...register("phone")}
                    className="w-full bg-gray-50 border border-gray-100 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                    placeholder="+44 123 456 789"
                />
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest text-navy-light/60 uppercase">Your Message</label>
                <textarea
                    {...register("message", { required: "Message is required" })}
                    rows={5}
                    className={cn(
                        "w-full bg-gray-50 border border-gray-100 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none",
                        errors.message && "border-red-500"
                    )}
                    placeholder="How can we help you?"
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                    "w-full bg-navy-dark text-white py-4 font-agency text-xl tracking-widest hover:bg-gold hover:text-navy-dark transition-all duration-300",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                )}
            >
                {isSubmitting ? "SENDING..." : "SUBMIT REQUEST"}
            </button>

            {submitStatus === "success" && (
                <p className="text-green-600 text-center font-montserrat text-sm font-semibold">
                    Message sent successfully! We'll get back to you soon.
                </p>
            )}
            {submitStatus === "error" && (
                <p className="text-red-500 text-center font-montserrat text-sm font-semibold">
                    Something went wrong. Please try again later.
                </p>
            )}
        </form>
    );
};
