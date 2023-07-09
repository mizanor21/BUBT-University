import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const AdmissionApply = () => {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return; // Prevent multiple submissions
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_9lch3ay",
        "template_lgp25fk",
        form.current,
        "D63jMqhWIMEpfEwwd"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Successfully information submission!");
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleProgramChange = (e) => {
    setSelectedProgram(e.target.value);
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div className="bg-slate-100 shadow-lg rounded-lg p-5 md:p-10 lg:p-20">
        <h3 className="text-2xl text-center mb-10">
          ভর্তি পরামর্শ এবং তথ্যের জন্য ফর্মটি পূরণ করুন
        </h3>
        <form ref={form} onSubmit={sendEmail} className="">
          <div className="form-control md:min-w-[600px]">
            <label className="label">
              <span className="label-text">
                Choose Program <span className="text-red-600">*</span>
              </span>
            </label>
            <select
              required
              className="select select-bordered select-success"
              value={selectedProgram}
              onChange={handleProgramChange}
              defaultValue=""
            >
              <option value="">Pick one</option>
              <option value="bba">BBA</option>
              <option value="cse">BSc. Engg in CSE</option>
              <option value="eee">BSc. in EEE</option>
              <option value="textile">BSc. in Textile Engineering</option>
              <option value="civil">BSc. in Civil Engineering</option>
              <option value="english">BA (Hons) in English</option>
              <option value="economics">BSc. (Hons) in Economics</option>
              <option value="llb">LL.B (Hons)</option>
              <option value="cse_eve">BSc. Engg in CSE (Evening)</option>
              <option value="eee_eve">BSc. in EEE (Evening)</option>
              <option value="textile_eve">
                BSc. in Textile Engineering (Evening)
              </option>
              <option value="civil_eve">
                BSc. in Civil Engineering (Evening)
              </option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Full Name <span className="text-red-600">*</span>
              </span>
            </label>
            <input
              required
              type="text"
              name="name"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Phone Number <span className="text-red-600">*</span>
              </span>
            </label>
            <input
              required
              type="number"
              name="number"
              placeholder="01848081720"
              className="input input-bordered input-success w-full"
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered input-success w-full"
            />
          </div>

          <div className="flex justify-between gap-5 w-full">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">
                  SSC Result <span className="text-red-600">*</span>
                </span>
              </label>
              <input
                required
                type="text"
                name="ssc_result"
                placeholder="A+"
                className="input input-bordered input-success"
              />
            </div>

            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">
                  SSC Passing Year <span className="text-red-600">*</span>
                </span>
              </label>
              <input
                required
                type="number"
                name="ssc_passing"
                placeholder="passing year"
                className="input input-bordered input-success"
              />
            </div>
          </div>

          <div className="flex justify-between gap-5 w-full">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">
                  HSC Result <span className="text-red-600">*</span>
                </span>
              </label>
              <input
                required
                type="text"
                name="hsc_result"
                placeholder="A+"
                className="input input-bordered input-success w-full"
              />
            </div>

            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">
                  HSC Passing Year <span className="text-red-600">*</span>
                </span>
              </label>
              <input
                required
                type="number"
                name="hsc_passing"
                placeholder="01848081720"
                className="input input-bordered input-success w-full"
              />
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">District</span>
            </label>
            <input
              name="district"
              placeholder="District"
              className="input input-bordered input-success w-full"
            />
          </div>

          <div className="flex justify-end mt-5">
            <button
              type="submit"
              className="btn bg-slate-300 px-7 rounded"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionApply;
