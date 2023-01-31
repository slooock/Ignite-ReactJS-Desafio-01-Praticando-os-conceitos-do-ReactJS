import styled from 'styled-components'
import * as ScrollArea from '@radix-ui/react-scroll-area'

export const Container = styled(ScrollArea.Root)`
  margin-top: 1rem;

  @import '@radix-ui/colors/blackA.css';
  @import '@radix-ui/colors/mauve.css';
  @import '@radix-ui/colors/violet.css';

  width: calc(100% + 40px);
  transform: translate(-20px, -0%);

  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 10px var(--blackA7);
  background-color: transparent;
  --scrollbar-size: 10px;

  .ScrollAreaViewport {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .ScrollAreaScrollbar {
    display: flex;
    user-select: none;
    touch-action: none;
    background: var(--blackA6);
    transition: background 160ms ease-out;
  }
  .ScrollAreaScrollbar:hover {
    background: var(--blackA8);
  }
  .ScrollAreaScrollbar[data-orientation='vertical'] {
    width: var(--scrollbar-size);
  }
  .ScrollAreaScrollbar[data-orientation='horizontal'] {
    flex-direction: column;
    height: var(--scrollbar-size);
  }

  .ScrollAreaThumb {
    flex: 1;
    background: var(--mauve10);
    border-radius: var(--scrollbar-size);
    position: relative;
  }
  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  .ScrollAreaThumb::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }

  .ScrollAreaCorner {
    background: var(--blackA8);
  }

  .Text {
    color: var(--violet11);
    font-size: 15px;
    line-height: 18px;
    font-weight: 500;
  }

  .Tag {
    color: var(--mauve12);
    font-size: 13px;
    line-height: 18px;
    margin-top: 10px;
    border-top: 1px solid var(--mauve6);
  }
`

export const MarginTop = styled.div`
  margin-top: 10px;
`
