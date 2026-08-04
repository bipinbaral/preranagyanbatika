"use client";

import { useState } from "react";
import { Send, FileText } from "lucide-react";
import { SCHOOL } from "@/lib/constants";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ApplyClient() {
  const [formState, setFormState] = useState({
    childName: "",
    childDob: "",
    childGender: "",
    program: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    address: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Admission Application: ${formState.childName}`;
    const body = `
Admission Application Details:

--- Child's Information ---
Name: ${formState.childName}
Date of Birth: ${formState.childDob}
Gender: ${formState.childGender}
Program Applying For: ${formState.program}

--- Parent/Guardian Information ---
Name: ${formState.parentName}
Phone: ${formState.parentPhone}
Email: ${formState.parentEmail}
Address: ${formState.address}

--- Additional Notes ---
${formState.notes || "None provided"}
    `.trim();

    const mailtoLink = `mailto:${SCHOOL.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <>
      <PageHeader
        title="Admission Application"
        description="Fill out the form below to apply for admission. Your application will be sent directly to our admissions office."
        breadcrumb="Home / Apply"
      />

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Card className="p-8 shadow-xl">
              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-dark-green">
                  Application Form
                </h2>
                <p className="mt-2 text-text/70">
                  Please provide accurate information. We will contact you soon after reviewing your application.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Child Information */}
                <div>
                  <h3 className="mb-4 flex items-center text-lg font-bold text-dark-green">
                    <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-xs font-bold text-dark-green">1</span>
                    Child's Information
                  </h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="childName" className="mb-1.5 block text-sm font-medium text-text/80">Full Name *</label>
                      <input
                        id="childName"
                        type="text"
                        required
                        value={formState.childName}
                        onChange={(e) => setFormState({ ...formState, childName: e.target.value })}
                        className="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="childDob" className="mb-1.5 block text-sm font-medium text-text/80">Date of Birth *</label>
                      <input
                        id="childDob"
                        type="date"
                        required
                        value={formState.childDob}
                        onChange={(e) => setFormState({ ...formState, childDob: e.target.value })}
                        className="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="childGender" className="mb-1.5 block text-sm font-medium text-text/80">Gender *</label>
                      <select
                        id="childGender"
                        required
                        value={formState.childGender}
                        onChange={(e) => setFormState({ ...formState, childGender: e.target.value })}
                        className="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="program" className="mb-1.5 block text-sm font-medium text-text/80">Program Applying For *</label>
                      <select
                        id="program"
                        required
                        value={formState.program}
                        onChange={(e) => setFormState({ ...formState, program: e.target.value })}
                        className="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select Program</option>
                        {SCHOOL.programs.map((prog) => (
                          <option key={prog} value={prog}>{prog}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Parent Information */}
                <div>
                  <h3 className="mb-4 flex items-center text-lg font-bold text-dark-green">
                    <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-xs font-bold text-dark-green">2</span>
                    Parent/Guardian Information
                  </h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="parentName" className="mb-1.5 block text-sm font-medium text-text/80">Full Name *</label>
                      <input
                        id="parentName"
                        type="text"
                        required
                        value={formState.parentName}
                        onChange={(e) => setFormState({ ...formState, parentName: e.target.value })}
                        className="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="parentPhone" className="mb-1.5 block text-sm font-medium text-text/80">Phone Number *</label>
                      <input
                        id="parentPhone"
                        type="tel"
                        required
                        value={formState.parentPhone}
                        onChange={(e) => setFormState({ ...formState, parentPhone: e.target.value })}
                        className="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="parentEmail" className="mb-1.5 block text-sm font-medium text-text/80">Email Address</label>
                      <input
                        id="parentEmail"
                        type="email"
                        value={formState.parentEmail}
                        onChange={(e) => setFormState({ ...formState, parentEmail: e.target.value })}
                        className="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-text/80">Residential Address *</label>
                      <input
                        id="address"
                        type="text"
                        required
                        value={formState.address}
                        onChange={(e) => setFormState({ ...formState, address: e.target.value })}
                        className="w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <h3 className="mb-4 flex items-center text-lg font-bold text-dark-green">
                    <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-xs font-bold text-dark-green">3</span>
                    Additional Information
                  </h3>
                  <div>
                    <label htmlFor="notes" className="mb-1.5 block text-sm font-medium text-text/80">Any special needs, medical conditions, or notes?</label>
                    <textarea
                      id="notes"
                      rows={4}
                      value={formState.notes}
                      onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                      className="w-full resize-none rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-black/10 text-center">
                  <Button type="submit" size="lg" className="w-full sm:w-auto min-w-[200px]">
                    <Send className="h-5 w-5" />
                    Submit Application
                  </Button>
                  <p className="mt-4 text-xs text-text/50">
                    Clicking submit will open your default email application with your application details ready to send.
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
