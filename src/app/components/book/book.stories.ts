import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { BookComponent } from './book.component';
export default {
  title: 'Components/BookListComponent',
  component: BookComponent,
  decorators: [
    moduleMetadata({
      declarations: [BookComponent],
      imports: [CommonModule,HttpClientModule],
    }),
  ],
};
const Template: Story<BookComponent> = () => ({
  component: BookComponent,
});
export const Base = Template.bind({
    
});