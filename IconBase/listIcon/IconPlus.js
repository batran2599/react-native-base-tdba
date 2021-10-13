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
    width: '20px',
    height: '20px',
    viewBox: '0 0 512 512',
    fill: '#2196f3',
    style: {},
};

function SVG(props) {
    return (
        <Svg height={props.width} viewBox={props.viewBox} width={props.height} style={props.style}>
            <Path
                d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
                fill={props.fill}
            />
            <Path
                d="m368 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0"
                fill="#ffffff"
            />
        </Svg>
    );
}

export default SVG;
