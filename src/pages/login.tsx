import FormCheckbox from "@/components/ui/forms/FormCheckbox";
import FormInputGroup from "@/components/ui/forms/FormInputGroup";
import AuthLayout from "@/components/layouts/AuthLayout";
import Link from "next/link";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

export default function Login() {
  return (
    <AuthLayout>
      <Card.Body>
        <p className="login-box-msg">Sign in to start your session</p>
        <Form action="../../index3.html" method="post">
          <FormInputGroup name="email" type="email" placeholder="Email" icon={<span className="fas fa-envelope"></span>} />
          <FormInputGroup name="password" type="password" placeholder="Password" icon={<span className="fas fa-lock"></span>} />
          <Row>
            <Col md={8}>
              <FormCheckbox name="remember" label="Remember Me" />
            </Col>
            <Col md={4}>
              <Button variant="primary" block>Sign In</Button>
            </Col>
          </Row>
        </Form>
        <div className="social-auth-links text-center mt-2 mb-3">
          <Button variant="primary" block><i className="fab fa-facebook mr-2"></i> Sign in using Facebook</Button>
          <Button variant="danger" block><i className="fab fa-google-plus mr-2"></i> Sign in using Google+</Button>
        </div>

        <Link href="/register" className="text-center">Register a new account</Link>
      </Card.Body>
    </AuthLayout>
  );
}
