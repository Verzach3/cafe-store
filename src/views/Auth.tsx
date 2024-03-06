import {
    TextInput,
    PasswordInput,
    Paper,
    Container,
    Group,
    Button,
} from '@mantine/core';
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function handleLogin() {
        try {
            await window.pb.collection("users").authWithPassword(email, password)
            navigate("/admin")
        } catch (e) {
            // @ts-expect-error error object is not typed
            console.error(Object.keys(e))
            // @ts-expect-error error object is not typed
            if (e.status === 400) {
                alert("Correo o contraseña incorrectos")
            }
        }
    }

    return (
        <div style={{height: "100vh", width: "100vw", overflow: "hidden"}}>
            <Container my={40} h={"100vh"}>
                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput type={"email"} label="Correo" placeholder="tu@correo.com" required value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                    <PasswordInput label="Contraseña" placeholder="Tu Contraseña" required mt="md" value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                    <Group justify="space-between" mt="lg">
                    </Group>
                    <Button fullWidth mt="xl" onClick={handleLogin}>
                        Iniciar Sesion
                    </Button>
                </Paper>
            </Container>
        </div>
    );
}
