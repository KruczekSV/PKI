import { Card, Col, Row } from 'antd';
import { LogoutButton } from '../../components/authButton';
import { getServerSession } from 'next-auth';
import { authConfig } from '../api/auth/[...nextauth]/auth.config';
import styles from '../login/page.module.css';
import { redirect } from 'next/navigation';
import Image from "next/image";
import githubLogo from '../../../public/icons/google.svg'
export default async function LoginPage() {

    const session = await getServerSession(authConfig);
    if(!session) 
        return redirect("/login");

    return (
      <main>
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }} className="relative before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-21">
          <Col span={8}>
            <Card 
            title={<div className={styles.cardTitle}> <img src={session?.user?.image} style={{ borderRadius: '50%', width: '100px', height: '100px' }}></img> {session?.user?.name} </div>} 
            style={{ backgroundColor: 'rgba(0, 0, 0, 0)'}}
            bordered={false}>
              <LogoutButton />
            </Card>
          </Col>
        </Row>
      </main>
    );
  }