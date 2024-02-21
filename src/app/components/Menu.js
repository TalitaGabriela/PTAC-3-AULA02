import Link from "next/link"
export default function Menu(){
    return(
        <header>
            <h3>Menu</h3>
            <nav>
                <ul>
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                    <Link href="/registro">
                        <li>Registrar</li>
                    </Link>
                </ul>    
            </nav>
        </header>
    );
}