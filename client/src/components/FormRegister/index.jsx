import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/usersSlice";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  birthday: "",
  isMale: true,
  avatar: "",
};

const FormRegister = () => {
  const dispatch = useDispatch();
  const onSubmit = (values, formikBag) => {
    dispatch(createUser(values));
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formikProps) => {
        const handleAvatar = ({ target }) => {
          formikProps.setFieldValue("avatar", target.files[0]);
        };
        const formFields = [
          {
            label: "avatar",
            name: "avatar",
            type: "file",
            onChange: handleAvatar,
          },
          { label: "first name", name: "firstName", type: "text" },
          { label: "last name", name: "lastName", type: "text" },
          { label: "email", name: "email", type: "email" },
          { label: "password", name: "password", type: "password" },
          { label: "birthday", name: "birthday", type: "date" },
          { label: "isMale", name: "isMale", type: "checkbox" },
        ];
        return (
          <Form encType="multipart/form-data">
            {formFields.map((field, index) => (
              <label key={index}>
                {field.label}:{field.type === "file" ? (
                  <input
                    name={field.name}
                    type={field.type}
                    onChange={handleAvatar}
                  />
                ) : (
                  <Field name={field.name} type={field.type} />
                )}
                <ErrorMessage name={field.label} />
              </label>
            ))}
            <button type="submit">register</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormRegister;
