import React from "react";
import image1 from "../../../../assets/images/convocation.jpeg";

const Evaluation = () => {
  return (
    <>
      {/* Banner For Semester Policy */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">
            Evaluation & Grading System
          </h1>
        </div>
      </div>
      {/* Text for Semester Policy */}
      <div className="my-8 mx-auto max-w-2xl">
        <span className="text-xl font-bold">Evaluation & Grading System</span>
        <p className="mt-4">
          (a) The Evaluation of each course at BUBT is made on 100 marks and the
          distribution of weightage is given below for all programs excepting
          LL.B and LL.M Programs:
        </p>
        <div className="overflow-x-auto">
          <div className="flex justify-center">
            <table className="table w-full">
              <tbody>
                {/* row 1 */}
                <tr>
                  <th className="w-16">1</th>
                  <td className="w-64">Attendance</td>
                  <td className="w-16">5%</td>
                </tr>
                {/* row 2 */}
                <tr className="hover:bg-gray-100">
                  <th>2</th>
                  <td>Quizzes</td>
                  <td>5%</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Class Tests & Tutorial</td>
                  <td>10%</td>
                </tr>
                {/* row 4 */}
                <tr>
                  <th>4</th>
                  <td>Assignment/Presentation/Lab/Project</td>
                  <td>10%</td>
                </tr>
                {/* row 5 */}
                <tr>
                  <th>5</th>
                  <td>Mid-Term Exam. (Middle of the Semester)</td>
                  <td>30%</td>
                </tr>
                {/* row 6 */}
                <tr>
                  <th>6</th>
                  <td>Final Exam. (End of the Semester)</td>
                  <td>40%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="my-8 mx-auto max-w-2xl">
        <span className="text-xl font-bold">
          For LLB and LL.M Programs the distribution of weightage is shown below
        </span>

        <div className="overflow-x-auto">
          <div className="flex justify-center">
            <table className="table w-full">
              <tbody>
                {/* row 1 */}
                <tr>
                  <th className="w-16">1</th>
                  <td className="w-64">Attendance</td>
                  <td className="w-16">10%</td>
                </tr>
                {/* row 2 */}
                <tr className="hover:bg-gray-100">
                  <th>2</th>
                  <td>ClassTest</td>
                  <td>10%</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Assignment and Presentation</td>
                  <td>10%</td>
                </tr>
                {/* row 4 */}
                <tr>
                  <th>4</th>
                  <td>Mid term Examination (Middle of the Semester)</td>
                  <td>30%</td>
                </tr>
                {/* row 5 */}
                <tr>
                  <th>5</th>
                  <td>Final Examination (End of the Semester)</td>
                  <td>40%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="my-8 mx-auto max-w-2xl">
        <span className="text-xl font-bold">
          (b) The Grading system is as follows:
        </span>
        <div className="overflow-x-auto">
          <div className="flex justify-center">
            <table className="table table-zebra w-full">
              {/* head */}
              <thead>
                <tr>
                  <th className="w-16"></th>
                  <th className="w-40">Numerical Grade</th>
                  <th className="w-40">Letter Grade</th>
                  <th className="w-24">Grade Point</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>80% and above</td>
                  <td>A+(A Plus)</td>
                  <td>4.00</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>75% to less than 80%</td>
                  <td>A (A Regular)</td>
                  <td>3.75</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>70% to less than 75%</td>
                  <td>A-(A Minus)</td>
                  <td>3.50</td>
                </tr>
                {/* row 4 */}
                <tr>
                  <th>4</th>
                  <td>65% to less than 70%</td>
                  <td>B+(B Plus)</td>
                  <td>3.25</td>
                </tr>
                {/* row 5 */}
                <tr>
                  <th>5</th>
                  <td>60% to less than 65%</td>
                  <td>B(B Regular)</td>
                  <td>3.00</td>
                </tr>
                {/* row 6 */}
                <tr>
                  <th>6</th>
                  <td>55% to less than 60%</td>
                  <td>B-(B Minus)</td>
                  <td>2.75</td>
                </tr>
                {/* row 7 */}
                <tr>
                  <th>7</th>
                  <td>50% to less than 55%</td>
                  <td>C+(C Regular)</td>
                  <td>2.50</td>
                </tr>
                {/* row 8 */}
                <tr>
                  <th>8</th>
                  <td>45% to less than 50%</td>
                  <td>C(C Regular)</td>
                  <td>2.25</td>
                </tr>
                {/* row 9 */}
                <tr>
                  <th>9</th>
                  <td>40% to less than 45%</td>
                  <td></td>
                  <td>2.00</td>
                </tr>
                {/* row 10 */}
                <tr>
                  <th>10</th>
                  <td>Less than 40%</td>
                  <td>F</td>
                  <td>0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Evaluation;
