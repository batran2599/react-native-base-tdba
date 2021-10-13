import React from 'react';
import PropTypes from 'prop-types';
import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';

SVG.propTypes = {
    width: PropTypes.any, // Chiều ngang của Icon
    height: PropTypes.any, // Chiều cao của Icon
    viewBox: PropTypes.string, // ViewBox của Icon
    fill: PropTypes.string, // Màu fill của Icon
    style: PropTypes.object, // Màu của thẻ SVG
};

SVG.defaultProps = {
    width: 46,
    height: 46,
    viewBox: '0 0 46 46',
    fill: '#34c759',
    style: {},
};

function SVG(props) {
    return (
        <Svg height={props.width} viewBox={props.viewBox} width={props.height} style={props.style}>
            <Path
                d="M35.822 0H10.178C4.557 0 0 4.557 0 10.178v25.646C0 41.443 4.557 46 10.178 46h25.645C41.443 46 46 41.443 46 35.822V10.178C46 4.557 41.443 0 35.822 0zM40 35.822A4.182 4.182 0 0135.822 40H10.178A4.182 4.182 0 016 35.822V10.178A4.182 4.182 0 0110.178 6h25.645A4.182 4.182 0 0140 10.178v25.644z"
                fill={props.fill}
            />
            <Path
                d="M21.925 33.298a3.253 3.253 0 01-4.596 0l-7.122-7.122a3.25 3.25 0 114.597-4.596l4.243 4.242c.321.32.84.32 1.161 0l11.489-11.489c1.27-1.27 3.326-1.27 4.597 0s1.271 3.327 0 4.597L21.925 33.298z"
                fill={props.fill}
            />
        </Svg>
    );
}

export default SVG;
