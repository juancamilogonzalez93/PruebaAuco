import { useRouter } from "next/navigation";

export const TaskCard = ({ task }) => {
    const router = useRouter();

    return (
        <div 
            style={{ background: "#041840", color: "white" }}
            onClick={() => router.push(`/edit/${task.title}`)}
        >
          <h1>{task.descripcion}</h1>
          <button>Delete</button>
          <p>{task.autor}</p>
        </div>
    );
};