import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { Modal } from "./modal";
require("./styles/formElement.scss");

Number.prototype.pad = function (l) {
  let ziros = "";
  for (let i = 0; i < l; i++) ziros += "0";
  return ziros.length >= `${this}`.length ? (ziros + this).slice(-l) : this;
};
export const Select_old = ({
  className,
  options,
  defaultValue,
  required,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue || "");
  const [label, setLabel] = useState(
    options.find((opt) => opt.value === defaultValue)?.label ||
      "Choose something"
  );
  const list = useRef(null);
  const button = useRef(null);
  const value_ref = useRef(null);
  useState(() => {
    const clickHandler = (e) => {
      if (
        e.path.includes(button.current) ||
        e.path.includes(value_ref.current)
      ) {
      } else {
        setOpen(false);
      }
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, []);
  useEffect(() => {
    onChange?.(value);
  }, [value]);
  return (
    <div
      className={`select-container ${open ? "open" : ""} ${className || ""}`}
    >
      <div ref={value_ref} className="value" onClick={() => setOpen(true)}>
        {label}
      </div>
      <button ref={button} onClick={() => setOpen(true)} className="clear">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.99967 5.3335L0.833008 0.333496H9.16634L4.99967 5.3335Z"
            fill="#242424"
          />
        </svg>
      </button>
      <input style={{ display: "none" }} required={required} />
      <ul className={`options`} ref={list}>
        {options.map((opt) => (
          <li
            key={opt.value}
            className={`${value === opt.value ? "selected" : ""}`}
            onClick={() => {
              setValue(opt.value);
              setLabel(opt.label);
            }}
          >
            {opt.label}{" "}
            <svg
              className="tick"
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0007 1.1665L3.69857 7.83317L0.833984 4.80287"
                stroke="#CFB675"
                strokeWidth="2"
              />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
};
export const Select = ({
  className,
  options,
  defaultValue,
  onChange,
  required,
}) => {
  const [value, setValue] = useState(defaultValue || "");
  const [label, setLabel] = useState(
    options.find((opt) => opt.value === defaultValue)?.label ||
      "Choose something"
  );
  const [open, setOpen] = useState(false);
  const [optionsStyle, setOptionsStyle] = useState({});
  const input = useRef();
  const section = useRef();
  useLayoutEffect(() => {
    const { width, height, x, y } = section.current.getBoundingClientRect();
    const top = window.innerHeight - y;
    setOptionsStyle({
      position: "absolute",
      right: window.innerWidth - (x + width + 17),
      top: Math.max(
        Math.min(
          y + height + 8,
          window.innerHeight - (5 * options.length + 12)
        ),
        12
      ),

      height: 37 * options.length,
      maxHeight: window.innerHeight - 16,
    });
  }, [open]);
  useEffect(() => {
    onChange?.(value);
  }, [value]);
  return (
    <div
      className={`select-container ${open ? "open" : ""} ${className || ""}`}
      ref={section}
      onClick={() => setOpen(!open)}
    >
      <div className="value" onClick={() => setOpen(true)}>
        {label}
      </div>
      <button onClick={() => setOpen(true)} className="clear">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.99967 5.3335L0.833008 0.333496H9.16634L4.99967 5.3335Z"
            fill="#242424"
          />
        </svg>
      </button>
      <input style={{ display: "none" }} required={required} />
      <Modal
        containerClass="select-modal"
        open={open}
        setOpen={setOpen}
        backdropClass="select-backdrop"
        onBackdropClick={() => setOpen(false)}
        style={optionsStyle}
      >
        <ul className={`options`}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`${value === opt.value ? "selected" : ""}`}
              onClick={() => {
                setValue(opt.value);
                setLabel(opt.label);
              }}
            >
              {opt.label}{" "}
              <svg
                className="tick"
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0007 1.1665L3.69857 7.83317L0.833984 4.80287"
                  stroke="#CFB675"
                  strokeWidth="2"
                />
              </svg>
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};
export const Searchbox = ({ defaultValue, onChange }) => {
  return (
    <section className="searchbox">
      <svg
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.3086 17L13.5309 13.2156L17.3086 17ZM15.6244 8.15789C15.6244 10.0563 14.8703 11.8769 13.5279 13.2193C12.1855 14.5617 10.3649 15.3158 8.46649 15.3158C6.5681 15.3158 4.74746 14.5617 3.40509 13.2193C2.06273 11.8769 1.30859 10.0563 1.30859 8.15789C1.30859 6.2595 2.06273 4.43886 3.40509 3.0965C4.74746 1.75413 6.5681 1 8.46649 1C10.3649 1 12.1855 1.75413 13.5279 3.0965C14.8703 4.43886 15.6244 6.2595 15.6244 8.15789V8.15789Z"
          stroke="#949496"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <input
        value={defaultValue}
        onChange={onChange}
        placeholder="Search items, creators and collections."
      />
    </section>
  );
};
export const Countdown = ({ time }) => {
  const time_ref = useRef(new Date(time).getTime() - new Date().getTime());
  const [t, setT] = useState({ day: 0, hour: 0, minute: 0, second: 0 });
  useEffect(() => {
    const interval = setInterval(() => {
      const s = 1000,
        m = s * 60,
        h = m * 60,
        d = h * 24;
      const day = Math.floor(time_ref.current / d),
        hour = Math.floor((time_ref.current - day * d) / h),
        minute = Math.floor((time_ref.current - (hour * h + day * d)) / m),
        second = Math.floor(
          (time_ref.current - (minute * m + day * d + hour * h)) / s
        );
      setT({ day, hour, minute, second });
      time_ref.current -= 1000;
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <time className="countdown">
      <span>{t.day.pad(2)}</span>
      <span>{t.hour.pad(2)}</span>
      <span>{t.minute.pad(2)}</span>
      <span>{t.second.pad(2)}</span>
    </time>
  );
};
