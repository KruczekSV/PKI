import { Card, Col, Row } from 'antd';
import { GoogleSignInButton, GitHubSignInButton } from '../../components/authButton';
import styles from './page.module.css';
import { getServerSession } from 'next-auth';
import { authConfig } from '../api/auth/[...nextauth]/auth.config';
import { redirect } from 'next/navigation';
import Link from "next/link";

export default async function LoginPage() {

  const session = await getServerSession(authConfig);
  if(session) 
      return redirect("/account");

  return (
    <main>
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }} className="relative before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-21">
        <Col span={8}>
          <Card 
          title={<div className={styles.cardTitle}>Login</div>} 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: "white", textAlign: "center"}}
          bordered={false}>
            <GoogleSignInButton />
            <GitHubSignInButton />
            <p style={{ marginTop: "20px" }}><Link href="/">Go back</Link></p>
          </Card>
        </Col>
      </Row>
    </main>
  );
}