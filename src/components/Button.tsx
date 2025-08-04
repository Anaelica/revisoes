
type ButtonProps = {
    label: string,
}

export default function Button({label}: ButtonProps) {
    return (
        <button className="px-4 py-2 bg-blue-700 font-semibold text-white">
            {label}
        </button>
    );
}

    // {/* <Button label='CLIQUE-ME'/>
    // <Button label='FECHAR'/> */}