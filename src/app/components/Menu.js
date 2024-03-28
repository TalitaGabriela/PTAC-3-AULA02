import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";

export default function Menu(){
    return(
        <header className={styles.cabecalho}>
            <Image className={styles.imagem} 
            width={100}
            height={110}
            src={"https://www.ifms.edu.br/marcaifms.png"}
            />
            <nav>
                <ul className={styles.lista}>
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                    <Link href="/registro">
                        <li>Registrar</li>
                    </Link>
                    <Link href="/localizacao">
                        <li>Localização</li>
                    </Link>
                </ul>    
            </nav>
        </header>
    );
}