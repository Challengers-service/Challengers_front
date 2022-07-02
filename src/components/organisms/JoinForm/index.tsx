import Button from "@atoms/Button";
import Text from "@atoms/Text";
import Labelnput from "@molecules/Labelnput";
import Auth from "apis/auth";
import { JoinParams } from "apis/auth/params.interface";
import { useForm } from "react-hook-form";
import { useInternalRouter } from "utils/routing";
import { StyledJoinForm } from "./JoinFormStyled";

export interface JoinFormProps {}

export default function JoinForm() {
  const router = useInternalRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<JoinParams>({ mode: "onChange" });

  const onSubmit = (data: JoinParams) => {
    console.log(data);
    Auth.join(data)
      .then(() => router.push("/auth/login"))
      .catch(error => console.log(error.response.data));
  };
  return (
    <StyledJoinForm onSubmit={handleSubmit(onSubmit)}>
      <div className="joinFormInput">
        <Labelnput
          register={{
            ...register("email", { required: "이메일을 입력해주세요" }),
          }}
          labelText="email"
          type="email"
        />
        <Text color="red" typography="h5">
          {errors.email?.message}
        </Text>
      </div>
      <div className="joinFormInput">
        <Labelnput
          register={{
            ...register("name", { required: "이름을 입력해주세요" }),
          }}
          labelText="name"
        />
        <Text color="red" typography="h5">
          {errors.name?.message}
        </Text>
      </div>
      <div className="joinFormInput">
        <Labelnput
          register={{
            ...register("password", { required: "비밀번호를 입력해주세요" }),
          }}
          labelText="password"
          type="password"
        />
        <Text color="red" typography="h5">
          {errors.password?.message}
        </Text>
      </div>
      <div className="joinFormInput">
        <Labelnput
          register={{
            ...register("passwordConfirm", {
              required: "비밀번호확인을 입력해주세요",
              validate: value =>
                value !== watch("password")
                  ? "비밀번호가 일치하지 않습니다."
                  : true,
            }),
          }}
          labelText="passwordConfirm"
          type="password"
        />
        <Text color="red" typography="h5">
          {errors.passwordConfirm?.message}
        </Text>
      </div>
      <Button type="submit" size="large" fullWidth={true}>
        Sign Up
      </Button>
    </StyledJoinForm>
  );
}
