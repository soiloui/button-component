import React from 'react';
import Button from './Button';
import {PRIMARY, SECONDARY, DANGER, SM, MD, LG, SHADOW, DISABLED, TEXT, OUTLINE} from '../constans';
import StyledButtonsSection from './styled/StyledButtonsSection';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import BackupIcon from '@material-ui/icons/Backup';


const ButtonsSection: React.FC = () => {
    return (
        <StyledButtonsSection>
        <h1>Soiloui's Button Component</h1>

        <div className="width-wrapper">
            <div className="decorative-bg"></div>

            {/* DEFAULT COLOR START */}

            <h2>Default color button</h2>

            {/* NORMAL & HOVER */}

            <p>Default</p>

            <div className="row row--2">

                <div className="button-card">
                    <code>{`<Button />`}</code>
                    <Button>Button</Button>
                </div>

                <div className="button-card">
                    <code>{`&:hover, &:focus`}</code>
                    <Button hoverAnimation>Button</Button>
                </div>
            </div>
            
            {/* VARIANTS */}

            <p>Variant</p>

            <div className="row row--2">

                <div className="button-card">
                    <code>{`<Button variant="${OUTLINE}"/>`}</code>
                    <Button variant={OUTLINE}>Button</Button>
                </div>

                <div className="button-card">
                    <code>{`<Button variant="${TEXT}"/>`}</code>
                    <Button variant={TEXT}>Button</Button>
                </div>

                <div className="button-card">
                    <code>{`&:hover, &:focus | variant="${OUTLINE}"`}</code>
                    <Button variant={OUTLINE} hoverAnimation>Button</Button>
                </div>

                <div className="button-card">
                    <code>{`&:hover, &:focus | variant="${TEXT}"`}</code>
                    <Button variant={TEXT} hoverAnimation>Button</Button>
                </div>
            </div>

            {/* SIZES */}

            <p>Size</p>

            <div className="row row--3">

                <div className="button-card">
                    <code>{`<Button size="${SM}"/>`}</code>
                    <Button size={SM}>Button</Button>
                </div>

                <div className="button-card">
                    <code>{`<Button size="${MD}"/>`}</code>
                    <Button size={MD}>Button</Button>
                </div>

                <div className="button-card">
                    <code>{`<Button size="${LG}"/>`}</code>
                    <Button size={LG}>Button</Button>
                </div>
            </div>

            {/* SHADOW & DISABLE */}

            <p>More</p>
            
            <div className="row row--2">

                <div className="button-card">
                    <code>{`<Button ${SHADOW}/>`}</code>
                    <Button shadow>Button</Button>
                </div>

                <div className="button-card">
                    <code>{`<Button ${DISABLED}/>`}</code>
                    <Button disabled>Button</Button>
                </div>
            </div>

            {/* DEFAULT COLOR END */}

            {/* COLORS START */}

            <h2>Accent color button</h2>

            {/* NORMAL */}

            <p>Colors</p>

            <div className="row row--3">

                <div className="button-card">
                    <code>{`<Button color="${PRIMARY}"/>`}</code>
                    <Button color={PRIMARY}>Button</Button>
                </div>

                <div className="button-card">
                    <code>{`<Button color="${SECONDARY}"/>`}</code>
                    <Button color={SECONDARY}>Button</Button>
                </div>

                <div className="button-card">
                    <code>{`<Button color="${DANGER}"/>`}</code>
                    <Button color={DANGER} >Button</Button>
                </div>
            </div>

            {/* HOVER */}

            <div className="row row--3">

                <div className="button-card">
                    <code>{`&:hover, &:focus | color="${PRIMARY}"`}</code>
                    <Button color={PRIMARY} hoverAnimation>Button</Button>
                </div>

                <div className="button-card">
                    <code>{`&:hover, &:focus | color="${SECONDARY}"`}</code>
                    <Button color={SECONDARY} hoverAnimation>Button</Button>
                </div>

                <div className="button-card">
                    <code>{`&:hover, &:focus | color="${DANGER}"`}</code>
                    <Button color={DANGER} hoverAnimation>Button</Button>
                </div>
            </div>

            {/* VARIANTS */}

            <p>Variants</p>

            {/* OUTLINE */}

            <div className="row row--3">

                <div className="button-card">
                    <code>{`<Button variant="${OUTLINE}" color="${PRIMARY}"/>`}</code>
                    <Button variant={OUTLINE} color={PRIMARY} >Button</Button>
                </div>

                <div className="button-card">
                    <code>{`<Button variant="${OUTLINE}" color="${SECONDARY}"/>`}</code>
                    <Button variant={OUTLINE} color={SECONDARY} >Button</Button>
                </div>

                <div className="button-card">
                    <code>{`<Button variant="${OUTLINE}" color="${DANGER}"/>`}</code>
                    <Button variant={OUTLINE} color={DANGER} >Button</Button>
                </div>
            </div>

                {/* TEXT */}

            <div className="row row--3">

                <div className="button-card">
                    <code>{`<Button variant="${TEXT}" color="${PRIMARY}"/>`}</code>
                    <Button variant={TEXT} color={PRIMARY}>Button</Button>
                </div>

                <div className="button-card">
                    <code>{`<Button variant="${TEXT}" color="${SECONDARY}"/>`}</code>
                    <Button variant={TEXT} color={SECONDARY}>Button</Button>
                </div>

                <div className="button-card">
                    <code>{`<Button variant="${TEXT}" color="${DANGER}"/>`}</code>
                    <Button variant={TEXT} color={DANGER}>Button</Button>
                </div>
            </div>

            {/* SIZES */}

            <p>Sizes</p>

            {/* SIZE SM */}

            <div className="row row--3">

                <div className="button-card">
                    <code>{`<Button size="${SM}" color="${PRIMARY}"/>`}</code>
                    <Button size={SM} color={PRIMARY}>Button</Button>
                </div>

                <div className="button-card">
                    <code>{`<Button size="${SM}" color="${SECONDARY}"/>`}</code>
                    <Button size={SM} color={SECONDARY}>Button</Button>
                </div>

                <div className="button-card">
                    <code>{`<Button size="${SM}" color="${DANGER}"/>`}</code>
                    <Button size={SM} color={DANGER}>Button</Button>
                </div>
            </div>
            
            {/* SIZE MD */}

            <div className="row row--3">

                <div className="button-card">
                    <code>{`<Button size="${MD}" color="${PRIMARY}"/>`}</code>
                    <Button size={MD} color={PRIMARY}>Button</Button>
                </div>

                <div className="button-card">
                    <code>{`<Button size="${MD}" color="${SECONDARY}"/>`}</code>
                    <Button size={MD} color={SECONDARY}>Button</Button>
                </div>

                <div className="button-card">
                    <code>{`<Button size="${MD}" color="${DANGER}"/>`}</code>
                    <Button size={MD} color={DANGER}>Button</Button>
                </div>
            </div>

            {/* SIZE LG */}

            <div className="row row--3">

                <div className="button-card">
                    <code>{`<Button size="${LG}" color="${PRIMARY}"/>`}</code>
                    <Button size={LG} color={PRIMARY}>Button</Button>
                </div>

                <div className="button-card">
                    <code>{`<Button size="${LG}" color="${SECONDARY}"/>`}</code>
                    <Button size={LG} color={SECONDARY}>Button</Button>
                </div>

                <div className="button-card">
                    <code>{`<Button size="${LG}" color="${DANGER}"/>`}</code>
                    <Button size={LG} color={DANGER}>Button</Button>
                </div>
            </div>

            {/* MORE */}
            
            <p>More</p>

            {/* SHADOW */}
            
            <div className="row row--3">

                <div className="button-card">
                    <code>{`<Button ${SHADOW} color="${PRIMARY}"/>`}</code>
                    <Button shadow color={PRIMARY}>Button</Button>
                </div>

                <div className="button-card">
                    <code>{`<Button ${SHADOW} color="${SECONDARY}"/>`}</code>
                    <Button shadow color={SECONDARY}>Button</Button>
                </div>

                <div className="button-card">
                    <code>{`<Button ${SHADOW} color="${DANGER}"/>`}</code>
                    <Button shadow color={DANGER}>Button</Button>
                </div>
            </div>

            {/* DISABLED */}
            
            <div className="row row--3">

                <div className="button-card">
                    <code>{`<Button ${DISABLED} color="${PRIMARY}"/>`}</code>
                    <Button disabled color={PRIMARY}>Button</Button>
                </div>

                <div className="button-card">
                    <code>{`<Button ${DISABLED} color="${SECONDARY}"/>`}</code>
                    <Button disabled color={SECONDARY}>Button</Button>
                </div>

                <div className="button-card">
                    <code>{`<Button ${DISABLED} color="${DANGER}"/>`}</code>
                    <Button disabled color={DANGER}>Button</Button>
                </div>
            </div>
           
            {/* COLORS END */}

            {/* ICONS START */}

            <h2>Use of Material Icons</h2>
            <p>Import of used icons required</p>

            <div className="row row--3 row--big-code">
            <code>import AcUnitIcon from '@material-ui/icons/AcUnit';</code>

                <div className="button-card">
                    <Button>
                        <>
                            <AcUnitIcon/>
                            <span>Button</span>
                        </>
                    </Button>
                    <code>
{`<Button>
    <>
        <AcUnitIcon/>
        <span>Button</span>
    </>
</Button>`}
                    </code>
                </div>


                <div className="button-card">
                    <Button variant={OUTLINE}>
                        <>
                            <AcUnitIcon/>
                            <span>Button</span>
                        </>
                    </Button>
                    <code>
{`<Button variant="${OUTLINE}">
    <>
        <AcUnitIcon/>
        <span>Button</span>
    </>
</Button>`}
                    </code>
                </div>

                <div className="button-card">
                    <Button variant={TEXT}>
                        <>
                            <AcUnitIcon/>
                            <span>Button</span>
                        </>
                    </Button>
                    <code>
{`<Button variant="${TEXT}">
    <>
        <AcUnitIcon/>
        <span>Button</span>
    </>
</Button>`}
                    </code>
                </div>

            </div>


            <div className="row row--3 row--big-code">
            <code>import BackupIcon from '@material-ui/icons/Backup';</code>

                <div className="button-card">
                    <Button color={PRIMARY}>
                        <>
                            <span>Button</span>
                            <BackupIcon/>
                        </>
                    </Button>
                    <code>
{`<Button color="${PRIMARY}">
    <>
        <span>Button</span>
        <BackupIcon/>
    </>
</Button>`}
                    </code>
                </div>


                <div className="button-card">
                    <Button  color={PRIMARY} variant={OUTLINE}>
                        <>
                            <span>Button</span>
                            <BackupIcon/>
                        </>
                    </Button>
                    <code>
{`<Button color="${PRIMARY}" variant="${OUTLINE}">
    <>
        <span>Button</span>
        <BackupIcon/>
    </>
</Button>`}
                    </code>
                </div>

                <div className="button-card">
                    <Button color={PRIMARY} variant={TEXT}>
                        <>
                            <span>Button</span>
                            <BackupIcon/>
                        </>
                    </Button>
                    <code>
{`<Button color="${PRIMARY}" variant="${TEXT}">
    <>
        <span>Button</span>
        <BackupIcon/>
    </>
</Button>`}
                    </code>
                </div>

            </div>

            {/* ICONS END */}

        </div>
        </StyledButtonsSection>
    )
}

export default ButtonsSection
