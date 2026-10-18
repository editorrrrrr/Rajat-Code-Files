
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username", { required: "Username is required" })}
          type="text"
          placeholder="Enter username"
        />
        {errors.username && <p>{errors.username.message}</p>}

        <input
          {...register("password", { required: "Password is required" })}
          type="password"
          placeholder="Enter password"
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
