import Link from "next/link";
import Counter from "../components/counter";

const Index = () => {
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(startClock());
  //   }, [dispatch]);

  return (
    <>
      <Counter />
      <Link href="/show-redux-state">
        <a>Click to see current Redux State</a>
      </Link>
    </>
  );
};

export default Index;
