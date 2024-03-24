import FormCheckbox from "@/components/ui/forms/FormCheckbox";
import FormInputGroup from "@/components/ui/forms/FormInputGroup";
import AuthLayout from "@/components/layouts/AuthLayout";
import Link from "next/link";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

export default function Register() {
  return (
    <AuthLayout>
      <Card.Body>
        <p className="login-box-msg">Register your account</p>
        <Form action="../../index3.html" method="post">
          <FormInputGroup name="name" type="text" placeholder="Full Name" icon={<span className="fas fa-user"></span>} />
          <FormInputGroup name="email" type="email" placeholder="Email" icon={<span className="fas fa-envelope"></span>} />
          <FormInputGroup name="password" type="password" placeholder="Password" icon={<span className="fas fa-lock"></span>} />
          <FormInputGroup name="password-confirmation" type="password" placeholder="Retype Password" icon={<span className="fas fa-lock"></span>} />
          <Button variant="primary" block>Register</Button>
        </Form>
        <div className="social-auth-links text-center mt-4 mb-3">
          <Button variant="primary" block><i className="fab fa-facebook mr-2"></i> Sign up using Facebook</Button>
          <Button variant="danger" block><i className="fab fa-google-plus mr-2"></i> Sign up using Google+</Button>
        </div>

          <Link href="/login">I already have an account</Link>
      </Card.Body>
    </AuthLayout>
  );
}
