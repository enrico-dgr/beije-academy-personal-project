import "./NavBar.css";

import PropTypes from "prop-types";
/**
 * This hook is used to change router's path.
 */
import { useNavigate } from "react-router-dom";

/**
 * Given an array of `path` objects ( the `props.paths` )
 * with keys `value` and `name`, a list of pseudo-buttons
 * will be rendered for navigation.
 *
 * **Style**
 *
 * You can choose to specify also some `className` for
 * the external `div`, the internal `div`s ( pseudo-buttons )
 * or `span`s ( the pseudo-button's text ).
 * This `className` can be generic if given as `props.<class>`,
 * or specific of the path through `props.paths[i].<class>`.
 *
 * List of keys for `className`s:
 * - classNameNavBar
 * - classNameLinkDiv
 * - classNameLinkSpan
 *
 * @example
 * <NavBar
 *  classNameLinkDiv="generic-class-for-div-button"
 *  paths={[
 *  {
 *   value: "/home",
 *   name: "Home"
 *   classNameLinkDiv: "specific-class-for-div-button"
 *  }
 * ]}
 * />
 */
const NavBar = (props) => {
	const navigate = useNavigate();
	const navigateTo = (path) => () => navigate(path);

	return (
		<div className={`base-nav ${props.classNameNavBar}`}>
			{props.paths.map(
				MapToLink(
					navigateTo,
					props.classNameLinkDiv,
					props.classNameLinkSpan
				)
			)}
		</div>
	);
};

/**
 * Map the `paths` to pseudo-button links.
 */
const MapToLink =
	(
		// navigation callback
		navigateTo,
		// styling
		classNameLinkDiv,
		classNameLinkSpan
	) =>
	// the actual mapping function
	(path, i) =>
		(
			<div
				className={`base-nav__link ${classNameLinkDiv} ${path.classNameLinkDiv}`}
				key={
					"base-nav__links-list" +
					i +
					path.value +
					path.name
				}
				// what actually makes this pseudo-button a router-link.
				onClick={navigateTo(path.value)}
			>
				<span
					className={`${classNameLinkSpan} ${path.classNameLinkSpan}`}
				>
					{path.name}
				</span>
			</div>
		);

NavBar.defaultProps = {
	classNameNavBar: "",
	classNameLinkDiv: "",
	classNameLinkSpan: "",
	paths: [],
};

NavBar.propTypes = {
	classNameNavBar: PropTypes.string,
	classNameLinkDiv: PropTypes.string,
	classNameLinkSpan: PropTypes.string,
	paths: PropTypes.array,
};

export default NavBar;
