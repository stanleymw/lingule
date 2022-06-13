import React from "react";
import {withTranslation} from "react-i18next";

class Word extends React.Component {
    render() {
        const t = this.props.t;
        let romanization = "";
        if (this.props.romanization) {
            romanization = <div id="romanization" className="ToolTip Side"
                                title={t("tips.romanization")}>{this.props.romanization}</div>;
        }
        return (
            <div className="WordContainer">
                <span id="word" className="ToolTip Side" title={t("tips.word")}>{this.props.word}</span>
                {romanization}
                <span id="ipa" className="ToolTip Side" title={t("tips.ipa")}>{this.props.ipa}</span>
                <span id="meaning" className="ToolTip Side" title={t("tips.meaning")}>{this.props.meaning}</span>
            </div>
        )
    }
}

export default withTranslation()(Word);