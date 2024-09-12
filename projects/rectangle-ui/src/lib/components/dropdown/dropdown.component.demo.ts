import { Component, HostBinding, signal } from "@angular/core";
import { DropdownComponent } from "@/components/dropdown/dropdown.component";
import { DropdownItemComponent } from "@/components/dropdown/dropdown.item.component";
import { DropdownModel } from "@/components/dropdown/dropdown.model";

@Component({
  selector: "rui-dropdown-demo",
  standalone: true,
  template: `
    <div class="flex flex-col gap-2">
      <span>Without default value:</span>
      <rui-dropdown [placeholder]="'Select a Pokémon..'" [(selectedItem)]="selectedPokemon1">
        @for (p of allPokemons; track p.id) {
          <rui-dropdown-item [item]="p" (itemSelected)="handlePokemonSelected($event)">
            {{ p.label }}
          </rui-dropdown-item>
        }
      </rui-dropdown>
    </div>
    <div class="flex flex-col gap-2">
      <span>With default value:</span>
      <rui-dropdown [placeholder]="'Select a Pokémon'" [(selectedItem)]="selectedPokemon2">
        @for (p of allPokemons; track p.id) {
          <rui-dropdown-item [item]="p" (itemSelected)="handlePokemonSelected($event)">
            {{ p.label }}
          </rui-dropdown-item>
        }
      </rui-dropdown>
    </div>
  `,
  imports: [DropdownComponent, DropdownItemComponent],
})
export class DropdownDemoComponent {
  allPokemons: DropdownModel[] = [
    { id: "1", label: "Pikachu" },
    { id: "2", label: "Bulbasaur" },
    { id: "3", label: "Charmander" },
    { id: "4", label: "Squirtle" },
    { id: "5", label: "Snorlax" },
    { id: "6", label: "Magikarp" },
    { id: "7", label: "Dragonite" },
  ];

  // Regular property binding
  selectedPokemon1: DropdownModel | undefined = undefined;

  // Signal binding
  selectedPokemon2 = signal<DropdownModel | undefined>(this.allPokemons[0]);

  handlePokemonSelected(pokemon: DropdownModel) {
    console.log("Selected Pokémon:", pokemon.label);
  }

  @HostBinding("class") hostClasses = "w-48 flex flex-col gap-4";
}
