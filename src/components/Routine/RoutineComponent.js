import React from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import useRoutine from "../../hooks/useRoutine";
import DeleteRoutine from "../Delete/DeleteRoutine";

export default function RoutineComponent() {
  const {
    routineSun,
    routineSat,
    routineMon,
    routineTue,
    routineWed,
    routineThu,
    loading,
  } = useRoutine();

  return (
    <div className="routine-compo-container">
      <div className="all-routine">
        <div className="time-box">
          <div>
            <h1>
              <strong>Saturday</strong>
            </h1>
          </div>
          {routineSat.map((value, index) => (
            <>
              <div className="each-classdetails" key={index}>
                {/* <p>{value.day}</p>
              <p>{value.time}</p> */}
                <div>
                  <button>
                    <DeleteRoutine id={value.id} />
                  </button>
                  <Link to={`/updateroutine/${value.id}`}>
                    <FaEdit />
                  </Link>
                </div>
                {value.classDetails.map((value, index) => (
                  <p>
                    {" "}
                    <strong> {value.sirName}</strong> - {value.subName} -{" "}
                    {value.className}{" "}
                  </p>
                ))}
              </div>
            </>
          ))}
        </div>
        <div className="time-box">
          <div>
            <h1>
              <strong>Sunday</strong>
            </h1>
          </div>
          {routineSun.map((value, index) => (
            <>
              <div className="each-classdetails">
                {/* <p>{value.day}</p>
              <p>{value.time}</p> */}
                <button classname="dlt-rtn-btn">
                  <DeleteRoutine id={value.id} />
                </button>
                <Link to={`/updateroutine/${value.id}`}>
                  <FaEdit />
                </Link>
                {value.classDetails.map((value, index) => (
                  <p>
                    {" "}
                    <strong> {value.sirName}</strong> - {value.subName} -{" "}
                    {value.className}{" "}
                  </p>
                ))}
              </div>
            </>
          ))}
        </div>

        <div className="time-box">
          <div>
            <h1>
              <strong>Monday</strong>
            </h1>
          </div>
          {routineMon.map((value, index) => (
            <div className="each-classdetails">
              {/* <p>{value.day}</p>
              <p>{value.time}</p> */}
              <button classname="dlt-rtn-btn">
                <DeleteRoutine id={value.id} />
              </button>
              {value.classDetails.map((value, index) => (
                <p>
                  {" "}
                  <strong> {value.sirName}</strong> - {value.subName} -{" "}
                  {value.className}{" "}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="time-box">
          <div>
            <h1>
              <strong>Tuesday</strong>
            </h1>
          </div>
          {routineTue.map((value, index) => (
            <div className="each-classdetails">
              {/* <p>{value.day}</p>
              <p>{value.time}</p> */}
              <button classname="dlt-rtn-btn">
                <DeleteRoutine id={value.id} />
              </button>
              {value.classDetails.map((value, index) => (
                <p>
                  {" "}
                  <strong> {value.sirName}</strong> - {value.subName} -{" "}
                  {value.className}{" "}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="time-box">
          <div>
            <h1>
              <strong>Wednesday</strong>
            </h1>
          </div>
          {routineWed.map((value, index) => (
            <div className="each-classdetails">
              {/* <p>{value.day}</p>
              <p>{value.time}</p> */}
              <button classname="dlt-rtn-btn">
                <DeleteRoutine id={value.id} />
              </button>
              {value.classDetails.map((value, index) => (
                <p>
                  {" "}
                  <strong> {value.sirName}</strong> - {value.subName} -{" "}
                  {value.className}{" "}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="time-box">
          <div>
            <h1>
              <strong>ThursDay</strong>
            </h1>
          </div>
          {routineThu.map((value, index) => (
            <div className="each-classdetails">
              {/* <p>{value.day}</p>
              <p>{value.time}</p> */}
              <button classname="dlt-rtn-btn">
                <DeleteRoutine id={value.id} />
              </button>
              {value.classDetails.map((value, index) => (
                <p>
                  {" "}
                  <strong> {value.sirName}</strong> - {value.subName} -{" "}
                  {value.className}{" "}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
