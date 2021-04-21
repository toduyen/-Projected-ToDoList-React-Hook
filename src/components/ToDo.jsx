import React from 'react'
import Button from '@atlaskit/button';
import styled , {css} from 'styled-components';
import SuccessIcon from '@atlaskit/icon/glyph/check-circle';
const Buttonstyled = styled(Button) `
    margin-top:5px;
    text-align: left;

    ${(p) => p.gachchan && css`text-decoration: line-through;`}

    &:hover{
        .check-item
        {
            display: inline-block;
        }
    }
    .check-item
    {
        display: none;
        &:hover{
            background-color: aquamarine;
            border-radius: 5px;
        }
    }
`;
function ToDo({giatri,chuyendoiTrangThais}) {
    return (
        <Buttonstyled 
            isSelected 
            shouldFitContainer
            gachchan={giatri.trangthai}
            iconAfter={
                <span className='check-item' onClick={()=>chuyendoiTrangThais(giatri.id)}>
                    <SuccessIcon primaryColor="#FFAB00"/>
                </span>
        }>{giatri.name}</Buttonstyled>
    )
}

export default ToDo
