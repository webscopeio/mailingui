import { LayoutGroup, motion } from 'framer-motion';
import { Language } from 'prism-react-renderer';
import * as React from 'react';
import { copyTextToClipboard } from '../utils';
import languageMap from '../utils/language-map';
import { Code } from './code';
import { IconButton } from './icon-button';
import { IconCheck } from './icon-check';
import { IconClipboard } from './icon-clipboard';
import { IconDownload } from './icon-download';
import { Tooltip } from './tooltip';

interface CodeContainerProps {
  markups: MarkupProps[];
  activeLang: string;
  setActiveLang: (lang: string) => void;
}

interface MarkupProps {
  language: Language;
  content: string;
}

export const CodeContainer: React.FC<Readonly<CodeContainerProps>> = ({
  markups,
  activeLang,
  setActiveLang,
}) => {
  const [isCopied, setIsCopied] = React.useState(false);

  const renderDownloadIcon = () => {
    const value = markups.filter((markup) => markup.language === activeLang);
    const file = new File([value[0].content], `email.${value[0].language}`);
    const url = URL.createObjectURL(file);

    return (
      <a
        href={url}
        download={file.name}
        className="text-slate-11 transition duration-200 ease-in-out hover:text-slate-12"
      >
        <IconDownload />
      </a>
    );
  };

  const renderClipboardIcon = () => {
    const handleClipboard = async () => {
      const activeContent = markups.filter(({ language }) => {
        return activeLang === language;
      });
      setIsCopied(true);
      await copyTextToClipboard(activeContent[0].content);
      setTimeout(() => setIsCopied(false), 3000);
    };

    return (
      <IconButton onClick={handleClipboard}>
        {isCopied ? <IconCheck /> : <IconClipboard />}
      </IconButton>
    );
  };

  React.useEffect(() => {
    setIsCopied(false);
  }, [activeLang]);

  return (
    <pre
      className={
        'relative w-full items-center whitespace-pre rounded-md border border-slate-6 text-sm backdrop-blur-md'
      }
      style={{
        lineHeight: '130%',
        background:
          'linear-gradient(145.37deg, rgba(255, 255, 255, 0.09) -8.75%, rgba(255, 255, 255, 0.027) 83.95%)',
        boxShadow: 'rgb(0 0 0 / 10%) 0px 5px 30px -5px',
      }}
    >
      <div className="h-9 border-b border-slate-6">
        <div className="flex">
          <LayoutGroup id="code">
            {markups.map(({ language }) => {
              const isCurrentLang = activeLang === language;
              return (
                <motion.button
                  className={`relative px-4 py-[8px] font-sans text-sm font-medium transition duration-200 ease-in-out hover:text-slate-12 ${
                    activeLang !== language ? 'text-slate-11' : 'text-slate-12'
                  }`}
                  onClick={() => setActiveLang(language)}
                  key={language}
                >
                  {isCurrentLang && (
                    <motion.span
                      layoutId="code"
                      className="absolute inset-0 bg-slate-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                  {languageMap[language]}
                </motion.button>
              );
            })}
          </LayoutGroup>
        </div>
        <Tooltip>
          <Tooltip.Trigger className="absolute right-2 top-2 hidden md:block">
            {renderClipboardIcon()}
          </Tooltip.Trigger>
          <Tooltip.Content>Copy to Clipboard</Tooltip.Content>
        </Tooltip>
        <Tooltip>
          {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
          <Tooltip.Trigger className="text-gray-11 absolute right-8 top-2 hidden md:block">
            {renderDownloadIcon()}
          </Tooltip.Trigger>
          <Tooltip.Content>Download</Tooltip.Content>
        </Tooltip>
      </div>
      {markups.map(({ language, content }) => {
        return (
          <div
            className={`${activeLang !== language && 'hidden'}`}
            key={language}
          >
            <Code language={language}>{content}</Code>
          </div>
        );
      })}
    </pre>
  );
};
