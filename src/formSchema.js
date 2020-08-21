import * as yup from "yup"


const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "First Name must be at least 2 characters long")
      .required("Name is Required"),
      pizza_size: yup
      .string()
      .oneOf(['small', 'medium', 'large'], "You must select a size")
      .required("You must select a size"),
  });

  export default formSchema