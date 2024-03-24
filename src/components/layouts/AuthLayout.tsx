import { Card } from "react-bootstrap";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <Card className="card-outline card-primary">
                    <Card.Header className="text-center">
                        <h1><b>Admin</b>LTE</h1>
                    </Card.Header>
                    {children}
                </Card>
            </div>
        </div>
    );
}
