import React from 'react';
import PropTypes from 'prop-types';
import ICON_NAME from './iconName';

/**
 * Icon import
 */
import IconPlus from './listIcon/IconPlus.js';
import IconTask from './listIcon/IconTask';
import IconRemove from './listIcon/IconRemove';
import IconListSelect from './listIcon/IconListSelect';
import IconListUnselect from './listIcon/IconListUnselect';
import IconTick from './listIcon/IconTick';
import IconSetting from './listIcon/IconSetting';
import IconCheckedSquare from './listIcon/IconCheckedSquare';
import IconUncheckedSquare from './listIcon/IconUncheckedSquare';
import IconMenu from './listIcon/IconMenu';
import IconPlusAdd from './listIcon/IconPlusAdd';
import IconBack from './listIcon/IconBack';
import IconOval from './listIcon/IconOval';
import IconCalendar from './listIcon/IconCalendar';
import IconRecycle from './listIcon/IconRecycle';

IconBase.propTypes = {
    name: PropTypes.string, // Tên Icon
    width: PropTypes.any, // Chiều ngang của Icon
    height: PropTypes.any, // Chiều cao của Icon
    viewBox: PropTypes.string, // ViewBox của Icon
    fill: PropTypes.string, // Màu fill của Icon
    style: PropTypes.object, // Màu của thẻ SVG
};

/**
 * Component Icon
 * @param {*} props
 * @author TDBA (13/06/2021)
 */
export default function IconBase(props) {
    let Icon = (iconName) => {
        switch (iconName) {
            case ICON_NAME.IconPlus:
                return <IconPlus {...props} />;
                break;
            case ICON_NAME.IconTask:
                return <IconTask {...props} />;
                break;
            case ICON_NAME.IconRemove:
                return <IconRemove {...props} />;
                break;
            case ICON_NAME.IconListSelect:
                return <IconListSelect {...props} />;
                break;
            case ICON_NAME.IconListUnselect:
                return <IconListUnselect {...props} />;
                break;
            case ICON_NAME.IconTick:
                return <IconTick {...props} />;
                break;
            case ICON_NAME.IconSetting:
                return <IconSetting {...props} />;
                break;
            case ICON_NAME.IconCheckedSquare:
                return <IconCheckedSquare {...props} />;
                break;
            case ICON_NAME.IconUncheckedSquare:
                return <IconUncheckedSquare {...props} />;
                break;
            case ICON_NAME.IconMenu:
                return <IconMenu {...props} />;
                break;
            case ICON_NAME.IconPlusAdd:
                return <IconPlusAdd {...props} />;
                break;
            case ICON_NAME.IconBack:
                return <IconBack {...props} />;
                break;
            case ICON_NAME.IconOval:
                return <IconOval {...props} />;
                break;
            case ICON_NAME.IconCalendar:
                return <IconCalendar {...props} />;
                break;
            case ICON_NAME.IconRecycle:
                return <IconRecycle {...props} />;
                break;
            default:
                return <IconTask {...props} />;
                break;
        }
    };
    return Icon(props.name);
}
