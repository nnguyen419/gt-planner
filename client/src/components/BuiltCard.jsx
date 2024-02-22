const BuiltCard = ({ plan, setPlanBuildChosen, setPlanDeleteChosen }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h3 className="card-title">{plan.name}</h3>

        <div className="card-actions justify-between">
          <button
            className="btn btn-outline btn-error"
            onClick={() => {
              document.getElementById("confirmation-pop-up").showModal();
              setPlanDeleteChosen(plan.name);
            }}
          >
            Delete
          </button>
          <button
            className="btn btn-outline btn-info"
            onClick={() => {
              setPlanBuildChosen({
                name: plan.name,
                ...JSON.parse(plan.content),
              });
            }}
          >
            Build
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuiltCard;
