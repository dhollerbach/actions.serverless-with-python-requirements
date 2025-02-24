import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_GetGeoLocationCommand, se_GetGeoLocationCommand } from "../protocols/Aws_restXml";
export { $Command };
export class GetGeoLocationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSDnsV20130401", "GetGeoLocation", {})
    .n("Route53Client", "GetGeoLocationCommand")
    .f(void 0, void 0)
    .ser(se_GetGeoLocationCommand)
    .de(de_GetGeoLocationCommand)
    .build() {
}
