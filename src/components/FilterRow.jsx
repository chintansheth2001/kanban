import "./FilterRow.scss";
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
          <span>Filter</span>
          <ArrowDown2 size="18" color="#787486" />
        </div>
        <div className="dropdown-btn">
          <Calendar1 size="18" color="#787486" />
          <span>Today</span>
          <ArrowDown2 size="18" color="#787486" />
        </div>
      </div>
      <div className="fr-share-col">
        <div className="dropdown-btn">
          <Profile2User size="18" color="#787486" />
          <span>Share</span>
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
