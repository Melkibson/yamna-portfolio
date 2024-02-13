import styled, {css} from 'styled-components'

/*=================================
=            COLORS            =
=================================*/

export const colors = {
    black: '#121212',
    white: '#FFFFFF',
    main: '#00aeff',
    purple: '#A100FF',
    pastelGreen:'#CDFFEC',
    darkGreen:'#47C897',
    darkPink:'#ff6397',
    pastelPink: '#FFD5E3',
    pastelBlue:'#B3EBFE',
    darkBlue: '#23C4FB',
    error: '#ff1414',
    fadedBlue:'rgba(0, 196, 255, 0.29)',
    blulet: '#6d48f8',
    darkGrey: '#292929',
    grey: '#AAA',
    lightGrey: '#f0f4f4',
}

/*=====  End of COLORS  ======*/

/*=================================
=            FONTS            =
=================================*/
export const Title = css`
  font-family: 'Neon', sans-serif;
`
export const FontHeading = css`
  font-family: 'Densmore', sans-serif;
`
export const FontHeading2 = css`
  font-family: 'Neon', sans-serif;
`

export const FontParagraphBd = css`
  font-family: 'AkkuratBd', sans-serif;
`
export const FontParagraphMd = css`
  font-family: 'Akkurat', sans-serif;
`
export const FontParagraphReg = css`
  font-family: 'AkkuratRg', sans-serif;
  font-weight: 300;
`
export const FontParagraphLight= css`
  font-family: 'AkkuratLgt', sans-serif;
`
/*=================================
=            TEXT SIZE            =
=================================*/
export const responsiveTextSize = (minSize, maxSize, minViewportSize, maxViewportSize) => css`
  font-size: calc(${minSize}px + (${maxSize} - ${minSize}) * (100vw - ${minViewportSize}px) / (${maxViewportSize} - ${minViewportSize}))`

export const textSize = {
    max: {
        h1: 200,
        h1Sub:100,
        h2: 46,
        h3: 28,
        pgMedium: 22,
        pgRegular: 20,
        pgSmall: 16,
        pgTiny: 13,
    },
    min: {
        h1: 90,
        h1Sub:46,
        h2: 32,
        h3: 18,
        pgMedium: 18,
        pgRegular: 16,
        pgSmall: 14,
        pgTiny: 12,

    }

}


/*=====  End of TEXT SIZE  ======*/

/*===================================
=            BREAK POINT            =
===================================*/

export const bp = {
    desktopBig: 1900,
    desktop: 1400,
    tablet: 1250,
    tabletMini: 850,
    mobile: 700,
    mobileSm: 350,
}

/*=====  End of BREAK POINT  ======*/

/* ------------------------------------------------- */
/* ********************* MIXIN ********************* */
/* ------------------------------------------------- */

/*----------  SECTION  ----------*/
export const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
    padding: 100px 0;
    transition: all 0.2s linear;
       @media screen and (max-width: ${bp.tablet}px){
      padding: 50px;
   }
    @media screen and (max-width: ${bp.mobile}px){
      padding: 40px 0 0 0;
   }

`

/*----------  GRID  ----------*/

export const Grid = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  justify-content: center;

  align-items: center;
  width: 1140px;
  height: 100%;
  @media screen and (min-width: ${bp.desktopBig}px){
      width: 1400px;

  }
  @media screen and (max-width: ${bp.tablet}px){
    max-width: 780px;
  }
  @media screen and (max-width: ${bp.tabletMini}px){
    max-width: 620px;
  }
   @media screen and (max-width: ${bp.mobile}px){
     max-width: 290px;
   }
   @media screen and (max-width: ${bp.mobileSm}px){
     max-width: 260px;
   }
`

/*----------  COLUMN  ----------*/

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
/*----------  ROW  ----------*/
export const Row = styled.div`
    display: flex;
    width: 100%;
    @media screen and (max-width: ${bp.mobile}px){
     flex-wrap: wrap;
   }
`
export const RowCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const RowBetween = styled(Row)`
    justify-content: space-between;
    align-items: center;
`
/*----------  HEADING  ----------*/

/*----------  H1  ----------*/

export const H1 = styled.h1`
  ${responsiveTextSize(textSize.min.h1,textSize.max.h1, bp.mobile, bp.desktopBig)};
  display: flex;
  align-items: center;
   ${FontHeading};
    @media screen and (max-width: ${bp.mobile}px){
    text-align: center;
    padding: 30px 0;
    line-height: 100%;
  }
`
/*----------  H2  ----------*/

export const H2 = styled.h2`
  ${Title};
  ${responsiveTextSize(textSize.min.h2,textSize.max.h2, bp.mobile, bp.desktopBig)};
  text-transform: lowercase;
  @media screen and (max-width: ${bp.mobile}px){
    text-align: ${props => props.align ? 'center' : 'left'};
  }
`
/*----------  H3  ----------*/

export const H3 = styled.h3.attrs(props => ({
    color : props.color
}))`
  ${FontParagraphBd};
  line-height: 125%;
  color: ${props => props.color};
  ${responsiveTextSize(textSize.min.h3,textSize.max.h3, bp.mobile, bp.desktopBig)};
`

/*----------  PARAGRAPH SMALL  ----------*/

export const PgSmall = css`
  ${FontParagraphReg};
  ${responsiveTextSize(textSize.min.pgSmall,textSize.max.pgSmall, bp.mobile, bp.desktopBig)};
`
export const PgSmallBold = css`
  ${FontParagraphBd};
  ${PgSmall};
  
`
/*----------  PARAGRAPH TINY  ----------*/

export const PgTiny = css`
  ${FontParagraphReg};
  ${responsiveTextSize(textSize.min.pgTiny,textSize.max.pgTiny, bp.mobile, bp.tablet)};
`

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  ${Title};
  height: 100%;
  width: 100%;
  line-height: 125%;
  color: ${props => props.color};
  ${responsiveTextSize(textSize.min.h3,textSize.max.h3, bp.mobile, bp.desktopBig)};
`
/*----------  IMAGE RESPONSIVE  ----------*/

export const ImgRes = css`
     display: block;
     width: 100%;
     height: auto;
`

