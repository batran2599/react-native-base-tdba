import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Animated, TouchableNativeFeedback } from 'react-native';
import switchBaseStyle from './switchBaseStyle';

SwitchBase.propTypes = {
    borderWidthSwitch: PropTypes.number, // Độ dày của đường viền switch
    backgroundColorSwitchTurnOn: PropTypes.string, // Màu nền switch khi On
    backgroundColorSwitchTurnOff: PropTypes.string, // Màu nền switch khi Off
    style: PropTypes.object, // Style custom cho phần tử bao ngoài
    styleinsideLeftSwitch: PropTypes.object, // Style phần tử con bên trái switch
    styleinsideRightSwitch: PropTypes.object, // Style phần tử con bên phải switch
    styleRunner: PropTypes.object, // Style của Runner
    shadowRunner: PropTypes.object, // Đổ bóng của runner
    insideRunner: PropTypes.any, // Phần tử con của Runner
    insideLeftSwitch: PropTypes.object, // Phần tử con bên trái switch
    insideRightSwitch: PropTypes.object, // Phần tử con bên phải switch
    isTurnOn: PropTypes.bool, // Có đang ở trạng thái bật không
    width: PropTypes.number, // Bề ngang của switch
    onPress: PropTypes.func, // Thực hiện khi nhấn vào switch
};

SwitchBase.defaultProps = {
    borderWidthSwitch: 0,
    backgroundColorSwitchTurnOn: '#4cd964',
    backgroundColorSwitchTurnOff: '#e5e5e5',
    style: {},
    styleRunner: {},
    styleinsideLeftSwitch: {},
    styleinsideRightSwitch: {},
    shadowRunner: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.22,

        elevation: 3,
    },
    isTurnOn: false,
    width: 55,
    onPress: () => {},
};

/**
 * Component switch
 * @author TDBA (12/10/2021)
 */
function SwitchBase(props) {
    const HEIGHT_SWITCH = (props.width * 3) / 5; // Chiều cao của switch
    const DIAMETER_RUNNER = (props.width * 3) / 5 - props.borderWidthSwitch * 2 - 5; // Đường kính của Runner
    const POSITION_RUNNER_WITH_BORDER_SWITCH = (HEIGHT_SWITCH - DIAMETER_RUNNER) / 2; // Khoảng cách của Runner với đường đường viền của switch
    const positionLeftRunner = useRef(new Animated.Value(1)).current; // Ví trí của runner so với bên trái switch
    const backgroundColorSwitch = useRef(new Animated.Value(0)).current;

    /**
     * Tạo di chuyển animation cho Runner và backgroundColor của switch
     * @author TDBA (13/10/2021)
     */
    useEffect(() => {
        if (props.isTurnOn) {
            // Animatin di chuyển Runner
            Animated.timing(positionLeftRunner, {
                toValue:
                    props.width -
                    POSITION_RUNNER_WITH_BORDER_SWITCH -
                    DIAMETER_RUNNER -
                    props.borderWidthSwitch,
                duration: 250,
                useNativeDriver: true,
            }).start();

            // Animation thay đổi màu background của switch
            Animated.timing(backgroundColorSwitch, {
                toValue: 1,
                duration: 250,
                useNativeDriver: false,
            }).start();
        } else {
            // Animatin di chuyển Runner
            Animated.timing(positionLeftRunner, {
                toValue: POSITION_RUNNER_WITH_BORDER_SWITCH - props.borderWidthSwitch,
                duration: 250,
                useNativeDriver: true,
            }).start();

            // Animation thay đổi màu background của switch
            Animated.timing(backgroundColorSwitch, {
                toValue: 0,
                duration: 250,
                useNativeDriver: false,
            }).start();
        }
    }, [props.isTurnOn]);

    return (
        <TouchableNativeFeedback onPress={props.onPress}>
            <Animated.View
                style={[
                    switchBaseStyle?.switchBase__wrap,
                    props.style,
                    {
                        width: props.width,
                        height: HEIGHT_SWITCH,
                        borderRadius: props.width / 2,
                        borderWidth: props.borderWidthSwitch,
                        backgroundColor: backgroundColorSwitch.interpolate({
                            inputRange: [0, 1],
                            outputRange: [
                                props.backgroundColorSwitchTurnOff,
                                props.backgroundColorSwitchTurnOn,
                            ],
                        }),
                    },
                ]}
            >
                <Animated.View
                    style={[switchBaseStyle?.switchBase__childSwitch, props.styleinsideLeftSwitch]}
                >
                    {props.insideLeftSwitch}
                </Animated.View>
                <Animated.View
                    style={[switchBaseStyle?.switchBase__childSwitch, props.styleinsideRightSwitch]}
                >
                    {props.insideRightSwitch}
                </Animated.View>
                <Animated.View
                    style={[
                        switchBaseStyle?.switchBase__runner,
                        props.styleRunner,
                        props.shadowRunner,
                        {
                            width: DIAMETER_RUNNER,
                            height: DIAMETER_RUNNER,
                            borderRadius: DIAMETER_RUNNER / 2,
                            transform: [
                                {
                                    translateX: positionLeftRunner,
                                },
                            ],
                        },
                    ]}
                >
                    {props.insideRunner}
                </Animated.View>
            </Animated.View>
        </TouchableNativeFeedback>
    );
}

export default SwitchBase;
