import React from "react";

const CostToolbar = props => {
  const { gridViewToggle, gridView } = props;

  const onClick = () => {
    gridViewToggle();
  };

  return (
    <div className="cost-toolbar">
      <h3>Costs</h3>
      <div className="card view-toggle">
        <div className={gridView ? "active" : ""} onClick={onClick}>
          Grid
        </div>
        <div className={!gridView ? "active" : ""} onClick={onClick}>
          List
        </div>
      </div>
    </div>
  );
};

export default CostToolbar;
