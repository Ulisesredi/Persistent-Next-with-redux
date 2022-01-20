import Link from "next/link";
import Counter from "../components/counter";
import Clock from "../components/clock";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { startClock } from "../store/clock/action";

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startClock());
  }, [dispatch]);

  return (
    <>
      <Clock />
      <Counter />
      <Link href="/show-redux-state">
        <a>Click to see current Redux State</a>
      </Link>
    </>
  );
};

export default Index;
