import Tbody from "./tbody";
import Thead from "./Thead";

export const Table: React.FC = () => {
  return (
    <div className="content">
      <div className="content-table mt-5">
        <table className="table">
          <Thead />
          <Tbody />
        </table>
      </div>
    </div>
  );
};
