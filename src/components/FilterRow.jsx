import React from "react";
import {
  Filter,
  ArrowDown2,
  Calendar1,
  Profile2User,
  Pause,
  Menu,
} from "iconsax-react";

function FilterRow() {
  return (
    <section className="filter-row">
      <div className="fr-filter-col">
        <div className="dropdown-btn">
          <Filter size="18" color="#787486" />
          Filter
          <ArrowDown2 size="18" color="#787486" />
        </div>
        <div className="dropdown-btn">
          <Calendar1 size="1" color="#787486" />
          Today
          <ArrowDown2 size="18" color="#787486" />
        </div>
      </div>
      <div className="fr-share-col">
        <div className="dropdown-btn">
          <Profile2User size="18" color="#787486" />
          Share
        </div>
        <span className="sptr" />
        <div className="view-icon pause active">
          <Pause size="18" />
        </div>
        <div className="view-icon">
          <Menu size="18" />
        </div>
      </div>
    </section>
  );
}

export default FilterRow;
