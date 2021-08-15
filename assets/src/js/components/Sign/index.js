import React, { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  Icon,
  Header,
  Input,
  InputWrapper,
  Form,
  Input2,
  Input3,
  Input2Wrapper,
  InputLabel,
  Btn,
  PolicyText,
  DateInputWrapper,
  GoToLogIn,
  GoToLogInLink,
  GoToLogInText,
  LevelsDiv,
  LevelDiv,
  LevelButton,
  LevelH1,
} from "./Elements";
import {
  DaySelect,
  MonthSelect,
  YearSelect,
  SujbectsSelect,
  LevelsSelect,
} from "./Selects";
export const Sign = ({ handleSignClick, isSignOpen }) => {
  // set whether the form is for liggin in or signing up.
  const [formType, setFormType] = useState({
    loginForm: true,
    signupForm: false,
  });

  const { loginForm, signupForm } = formType;

  const switchFormType = () => {
    // switch the the type of the form.
    const newState = {};
    Object.entries(formType).map((array) => (newState[array[0]] = !array[1]));
    setFormType(newState);
  };
  const switchType = () => {
    var variable = "string"
    return " string "
  }
  return (
    <Container>
      <Wrapper>
        {/* put the code here according to the type of the form. */}
        {loginForm ? <Login switchFormType={switchFormType} /> : null}
        {signupForm ? <Signup switchFormType={switchFormType} /> : null}
      </Wrapper>
    </Container>
  );
};

const Login = ({ switchFormType }) => {
  return (
    // we return the code below to the Sign component and replace whats inside it.
    <>
      <Header>Log Into your account </Header>
      <Icon src={"static/src/images/favicon.svg"} />
      <Form isLogin={Login}>
        <InputWrapper>
          <Input placeholder=" " />
          <InputLabel>Username or Email</InputLabel>
        </InputWrapper>
        <InputWrapper>
          <Input placeholder=" " />
          <InputLabel>Password</InputLabel>
        </InputWrapper>
        <Btn>Login</Btn>
        <GoToLogIn>
          <GoToLogInText>New Here?</GoToLogInText>
          <GoToLogInLink onClick={switchFormType}>
            {" "}
            Create an Account
          </GoToLogInLink>
        </GoToLogIn>
      </Form>
    </>
  );
};

const Signup = ({ switchFormType }) => {
  const [accountType, setAccountType] = useState({
    student: false,
    teacher: false,
    parent: false,
  });
  const { student, teacher, parent } = accountType;

  const switchAccountType = (changedAccountType) => {
    const newState = { ...accountType };
    newState[changedAccountType] = true;

    setAccountType(newState);
  };

  const resetState = () => {
    const newState = {};
    Object.entries(accountType).map((array) => (newState[array[0]] = false));
    setAccountType(newState);
  };

  const StudentForm = () => {
    return (
      <>
        <LevelsSelect />
      </>
    );
  };

  const TeacherForm = () => {
    const [chosenLevels, setChosenLevels] = useState([]);
    const [chosenSubjects, setChosenSubjects] = useState([]);
    const handleLevelsSelectChange = () => {
      const select = document.getElementById("levels-select");

      const newState = (
        <LevelDiv id={select.value}>
          <LevelButton
            onClick={() => removeSelectedLevel(newState)}
          ></LevelButton>
          <LevelH1>{select.value}</LevelH1>
        </LevelDiv>
      );

      setChosenLevels((prevState) => {
        let doesExist = false;
        prevState.map((element) => {
          if (element.props.id == select.value) {
            doesExist = true;
          }
        });
        if (doesExist == false) {
          return [...prevState, newState];
        } else {
          return [...prevState];
        }
      });
    };
    const removeSelectedLevel = (selectedElement) => {
      setChosenLevels((prevState) => {
        const findElement = (element) => {
          return element.props.id == selectedElement.props.id;
        };

        const index = prevState.findIndex(findElement);
        prevState.splice(index, 1);
        console.log(prevState);
        return [...prevState];
      });
    };

    const handleSubjectsSelectChange = () => {
      console.log("function claled");
      const select = document.getElementById("subjects-select");

      const newState = (
        <LevelDiv id={select.value}>
          <LevelButton
            onClick={() => removeSelectedSubject(newState)}
          ></LevelButton>
          <LevelH1>{select.value}</LevelH1>
        </LevelDiv>
      );

      setChosenSubjects((prevState) => {
        let doesExist = false;
        prevState.map((element) => {
          if (element.props.id == select.value) {
            doesExist = true;
          }
        });
        if (doesExist == false) {
          return [...prevState, newState];
        } else {
          return [...prevState];
        }
      });
    };

    const removeSelectedSubject = (selectedElement) => {
      console.log("funciton called");
      setChosenSubjects((prevState) => {
        const findElement = (element) => {
          return element.props.id == selectedElement.props.id;
        };

        const index = prevState.findIndex(findElement);
        prevState.splice(index, 1);
        console.log(prevState);
        return [...prevState];
      });
    };

    return (
      <>
        <SujbectsSelect
          handleSubjectsSelectChange={handleSubjectsSelectChange}
        />
        <div>{chosenSubjects}</div>
        <LevelsSelect handleLevelsSelectChange={handleLevelsSelectChange} />
        <div>{chosenLevels}</div>
      </>
    );
  };

  const ParentForm = () => {
    const handelUsernameSearch = (event) => {
      if (event.keyCode == 13) {
        event.preventDefault();
        const input = document.getElementById("username_searchbar");
        const username = input.value;
        console.log(`searching... for ${input.value}`);
      }
    };
    let data = [];
    fetch("/api/accounts/")
      .then((res) => res.json())
      .then((data) => (data = data));
    console.log(data);
    fetch("/api/login", {
      headers: {
        username: "admin2",
        password: "admin2",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    return (
      <>
        <InputWrapper>
          <Input
            id="username_searchbar"
            onKeyDown={(event) => handelUsernameSearch(event)}
            placeholder=" "
          />
          <InputLabel>Add your child's username.</InputLabel>
        </InputWrapper>
      </>
    );
  };

  if (student == false && teacher == false && parent == false) {
    return (
      <>
        <button onClick={() => switchAccountType("student")}>Student</button>
        <button onClick={() => switchAccountType("teacher")}>Teacher</button>
        <button onClick={() => switchAccountType("parent")}>Parent</button>
        <GoToLogIn>
          <GoToLogInText>You already have an account? </GoToLogInText>
          <GoToLogInLink onClick={switchFormType}> Log In</GoToLogInLink>
        </GoToLogIn>
      </>
    );
  }

  return (
    <>
      <button onClick={resetState}>Go back</button>
      {/* the button above will set every accountType to false and thus go back to the first page */}
      <Header>
        Create An Account as a{" "}
        {student ? "student" : teacher ? "teacher" : "parent"}
      </Header>
      <Icon src={"static/src/images/favicon.svg"} />

      <Form>
        <Input2Wrapper>
          <InputWrapper>
            <Input2 placeholder=" " />
            <InputLabel>First Name</InputLabel>
          </InputWrapper>
          <InputWrapper>
            <Input3 placeholder=" " />
            <InputLabel>Last Name</InputLabel>
          </InputWrapper>
        </Input2Wrapper>

        <InputWrapper>
          <Input placeholder=" " />
          <InputLabel>Username</InputLabel>
        </InputWrapper>

        <InputWrapper>
          <Input placeholder=" " />
          <InputLabel>Email</InputLabel>
        </InputWrapper>

        <DateInputWrapper>
          <DaySelect />
          <MonthSelect />
          <YearSelect />{" "}
        </DateInputWrapper>
        {student ? <StudentForm /> : null}
        {teacher ? <TeacherForm /> : null}
        {parent ? <ParentForm /> : null}
        <Btn>Sign Up</Btn>

        <PolicyText>
          By clicking Sign up, I agree to My Terms and Privacy Policy
        </PolicyText>
        <GoToLogIn>
          <GoToLogInText>You already have an account? </GoToLogInText>
          <GoToLogInLink onClick={switchFormType}> Log In</GoToLogInLink>
        </GoToLogIn>
      </Form>
    </>
  );
};
