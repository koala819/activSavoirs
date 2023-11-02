import { Text } from "@/src/components/atoms/Text";
export function Resultats({ resultat }: { resultat: string }) {
  return (
    <div className='h-full flex items-center'>
      <Text text={resultat} />
    </div>
  );
}
