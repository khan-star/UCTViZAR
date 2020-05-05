import React, { Component } from "react";
import { Container, Content, Accordion, icon, expandedIcon} from "native-base";
import { Uparrow } from '../assets/images';
import { Downarrow } from '../assets/images';
const dataArray = [
  { title: "DONNING THE FACE SHIELD", content:  "1) Put on a full face shield over the N95 respirator or face mask to provide additional protection to the front and sides of the face, including skin and eyes. \n \n 2) Hold on to the face shield with both hands, expand the elastic with your thumbs. \n \n 3) Place the elastic behind your head, so that the foam rests on your forehead. \n \n 4) Once the shield is situated, check to make sure it covers the front and sides of the face and no areas are left uncovered."} ,
  { title: "DISPOSING THE FACE SHIELD", content: "In this step, you will take off your face shield. \n\n 1) To do this, tilt your head forward slightly, grab the strap at the temples \n\n 2) Pull it forward and over your head, which will let the face shield fall from your face. \n\n 3) Dispose of the face shield in an appropriate manner which reduces chances of infection. \n\n 4) Always clean hands with soap for at least 20 seconds and use hand sanitizer after touching used face shields.In this step, you will take off your face shield. " },
  { title: "CLEANING THE FACE SHIELD", content: "Feedback from physicians and infection control groups suggests that the Face Shield product is not suitable for reuse even with appropriate cleaning in between patients. \n\n Each hospital should determine appropriate use / reuse protocols based on a review of the product by the hospital's Infection Control group. \n\n Face shields delivered to facilities should be considered non-sterile. Consult the CDIC for the latest guidance on disinfectants known to be effective against COVID- 19. \n\n The following cleaning materials may be appropriate to clean only the plastic visor: \n 1) Soap-water \n 2) Isopropanol (70%) wipe \n\n The following are not compatible with the visor and should not be used to clean face shields: \n 1) Hydrogen peroxide vapor sterilization \n 2) Autoclave \n 3)Soak in isopropanol or organic solvent \n\n For dealing with highly infectious situations, it is recommended that the face shields are swapped out every 5 hours." },
  { title: "STORING THE FACE SHIELD", content: "1) Face shields should be left in their sealed packaging in a dark area for 72 hours after manufacture and before use. \n\n 2) This is to ensure that the shields do not hold any contaminants. \n\n 3) Store in a protected, dry, and cool storage location." },
];
export default class AccordionHeaderContentStyleExample extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Accordion
            dataArray={dataArray}
            headerStyle={{ backgroundColor: "#b7daf8" }}
            contentStyle={{ backgroundColor: "#ddecf8" }}
          />
        </Content>
      </Container>
    );
  }
}