import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageBreadcrumbComponent } from '../../shared/components/common/page-breadcrumb/page-breadcrumb.component';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [PageBreadcrumbComponent],
  templateUrl: './placeholder.component.html',
})
export class PlaceholderComponent {
  private route = inject(ActivatedRoute);
  heading: string = this.route.snapshot.data['heading'] ?? 'Page';
}
