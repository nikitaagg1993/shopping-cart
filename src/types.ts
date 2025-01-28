export type Course = {
  id: number;
  image: string;
  price: number;
  name: string;
};

export type Courses = Course[];

export type CartCourse = {
  product: Course;
  quantity: number;
};

export type CartCourses = CartCourse[];

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type InputOnChange = (event: InputChangeEvent) => void;
