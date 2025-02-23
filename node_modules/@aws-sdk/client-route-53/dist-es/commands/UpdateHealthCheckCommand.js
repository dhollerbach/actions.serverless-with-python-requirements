import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_UpdateHealthCheckCommand, se_UpdateHealthCheckCommand } from "../protocols/Aws_restXml";
export { $Command };
export class UpdateHealthCheckCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSDnsV20130401", "UpdateHealthCheck", {})
    .n("Route53Client", "UpdateHealthCheckCommand")
    .f(void 0, void 0)
    .ser(se_UpdateHealthCheckCommand)
    .de(de_UpdateHealthCheckCommand)
    .build() {
}
