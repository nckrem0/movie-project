import Banner from "./Banner";
import MovieShowing from "./MovieShowing";

const Home = () => {
  return (
    <div>
      <Banner />
      <MovieShowing />
    </div>
  );
};

// Lưu ý: luôn dùng interface ( chỉ dùng type khi không thể dùng interface )
// interface Props {}

// const Home = (props: Props) => {
//   const counter = useSelector((state: RootState) => state.counter);
//   const dispatch = useDispatch();
//   const handleIncreaseByAount = () => {
//     const amount = Number(prompt("Input your amount"));
//     dispatch(increaseByAmount(amount));
//   };
//   return (
//     <div>
//       <p>Count: {counter}</p>
//       <button onClick={() => dispatch(increase())}>Increase</button>
//       <button onClick={() => dispatch(decrease())}>Decrease</button>
//       <button onClick={handleIncreaseByAount}>IN</button>
//     </div>
//   );
// };

export default Home;
