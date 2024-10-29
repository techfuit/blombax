"use client"
import React, { useState, useEffect } from "react";

const PhoneNumberInput = ({ value, onChange, name, id }) => {
  const [formattedValue, setFormattedValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setFormattedValue(value);
    validatePhoneNumber(value);
  }, [value]);

  const validatePhoneNumber = (phoneNumber) => {
    // Check if phoneNumber contains only digits and has a length between 10 and 15
    const regex = /^[0-9]{10,15}$/;
    setIsValid(regex.test(phoneNumber));
  };

  const handleChange = (e) => {
    // Allow only digits
    const rawValue = e.target.value.replace(/\D/g, "");
    onChange({
      target: {
        name,
        value: rawValue
      }
    });
    setFormattedValue(rawValue);
    validatePhoneNumber(rawValue);
  };

  return (
    <div className="relative w-full">
      <input
        type="tel"
        name={name}
        id={id}
        value={formattedValue}
        onChange={handleChange}
        className={`mt-1 w-full px-5 py-2.5 border rounded-md outline-none bg-[#00000010] ${
          isValid ? "border-gray-300 " : "border-red-500 "
        }`}
        placeholder="1234567890"
      />
      {!isValid && (
        <p className="text-red-500 text-sm mt-1">Please enter a valid phone number.</p>
      )}
    </div>
  );
};

export default PhoneNumberInput;
