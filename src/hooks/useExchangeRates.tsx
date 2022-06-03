import React, { useState, useEffect } from "react";

const useExchangeRates = () => {
  const [rates, setRates] = useState<any>({});

  const [currencyData, setCurrencyData] = useState({
    to: "EUR",
    from: "EUR",
  });

  const fetchExchange = async () => {
    const URL = "https://api.exchangerate.host/latest";
    const res = await fetch(URL);
    const data = await res.json();
    setRates(data.rates);
  };

  useEffect(() => {
    fetchExchange();
  }, []);

  return [currencyData, setCurrencyData, rates];
};

export default useExchangeRates;
